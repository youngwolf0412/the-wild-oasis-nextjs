import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pdjuffxcmekxtypwxyfd.supabase.co";
const serviceKey = process.env.SERVICE_KEY;
export const supabase = createClient(supabaseUrl, serviceKey);
