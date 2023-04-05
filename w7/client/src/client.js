import { createClient } from "@supabase/supabase-js";

const URL = "https://wmqkhfdwhikeswjqqxqq.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtcWtoZmR3aGlrZXN3anFxeHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTcyMDAsImV4cCI6MTk5NjIzMzIwMH0._Vld2o-lC4hsGOX3JZLTPnLQ2vgVQyBNu7VMZPDuGmw";

export const supabase = createClient(URL, API_KEY);