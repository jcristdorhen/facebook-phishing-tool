import { createClient } from '@supabase/supabase-js'

// Use the same URL and key as jordan.html for consistency
const supabaseUrl = 'https://lskjotukolosypjpgpcc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxza2pvdHVrb2xvc3lwanBncGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MjE1NjgsImV4cCI6MjA1OTA5NzU2OH0.71Xxc1LRU0ie6-nUDBoF5Yoy9hizuoBh8AJj5kL2NpM'

export const supabase = createClient(supabaseUrl, supabaseKey)
