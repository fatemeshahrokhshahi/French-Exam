-- FrançaisExam — Supabase schema (optional account sync).
-- Run in the Supabase dashboard → SQL editor. Safe to re-run.

create table if not exists public.scores (
  id             bigint generated always as identity primary key,
  user_id        uuid not null references auth.users (id) on delete cascade,
  exam_id        text not null,
  exam_title     text,
  total_score    int,
  max_score      int,
  percentage     int,
  section_scores jsonb,
  taken_at       timestamptz not null default now()
);

create table if not exists public.mistakes (
  id             bigint generated always as identity primary key,
  user_id        uuid not null references auth.users (id) on delete cascade,
  question_id    text not null,
  question_text  text,
  your_answer    text,
  correct_answer text,
  category       text,
  exam_id        text,
  tip_tr         text,
  tip_en         text,
  count          int not null default 1,
  last_seen_at   timestamptz not null default now(),
  unique (user_id, question_id)
);

alter table public.scores   enable row level security;
alter table public.mistakes enable row level security;

drop policy if exists "own scores" on public.scores;
create policy "own scores" on public.scores
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "own mistakes" on public.mistakes;
create policy "own mistakes" on public.mistakes
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Lets a signed-in user delete their own account (required by the App Store and Google Play).
create or replace function public.delete_user()
returns void
language sql
security definer
set search_path = ''
as $$
  delete from auth.users where id = auth.uid();
$$;

revoke all on function public.delete_user() from public, anon;
grant execute on function public.delete_user() to authenticated;
