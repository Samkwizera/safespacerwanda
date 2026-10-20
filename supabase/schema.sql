-- SafeSpace Rwanda: form submission tables.
-- Run this in the Supabase SQL editor. Row Level Security is enabled with
-- NO policies, so the public anon key can neither read nor write. Only the
-- server (using the service role key) can insert. Submissions stay private.

create table if not exists community_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  age_range text not null,
  location text,
  interests text[],
  consent_given boolean not null,
  consent_at timestamptz not null
);

create table if not exists volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  age_range text not null,
  skills text not null,
  availability text,
  consent_given boolean not null,
  consent_at timestamptz not null
);

create table if not exists partner_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  organization text not null,
  idea text not null,
  consent_given boolean not null,
  consent_at timestamptz not null
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  consent_given boolean not null,
  consent_at timestamptz not null
);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  consent_given boolean not null,
  consent_at timestamptz not null
);

alter table community_signups enable row level security;
alter table volunteer_applications enable row level security;
alter table partner_inquiries enable row level security;
alter table contact_messages enable row level security;
alter table newsletter_subscribers enable row level security;
