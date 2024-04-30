
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('', '')


    const {data, error} = await supabase
    .from('users')
    .select();
  
    console.log(data);





