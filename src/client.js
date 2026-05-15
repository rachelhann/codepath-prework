import { createClient } from '@supabase/supabase-js'
const URL = 'https://wnszvxfuhxsgriobfbra.supabase.co'
const API_KEY = 'sb_publishable_NlyMd7nApWNx4wNUmlSGwA_Vq7yCz2x'
export const supabase = createClient(URL, API_KEY)
