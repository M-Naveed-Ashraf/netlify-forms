// import Supabase
import { createClient } from '@supabase/supabase-js';

// Setup 
const config = {
    // url: "https://wttuaqedytxahqpuwfhv.supabase.co",
    url: "https://pjkbbmrhhxqndsutimbl.supabase.co",
    // key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDc4NjcxMCwiZXhwIjoxOTU2MzYyNzEwfQ.DWOZXF9KHHMZxHgF4uBotCMmAxYoEdomglcqf61f4Oc"
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNzExNTA5MSwiZXhwIjoxOTMyNjkxMDkxfQ.Ii8olqXXJ_-jNkBe9-oTRVmXDJ_7a-ntqbUUMEqrgIk"
}

// Create a single supabase client for interacting with your database 
const supabase = createClient(config.url, config.key);

// Export supabase
export default supabase;

// Export config
export { config };