import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { HfInference } from 'npm:@huggingface/inference@2.6.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { jobDescription } = await req.json();

    // Initialize Hugging Face client
    const hf = new HfInference(Deno.env.get('HUGGINGFACE_API_KEY'));

    // Generate recommendations using an appropriate model
    const prompt = `Given this job description: "${jobDescription}", provide specific recommendations for tailoring a CV and preparing for this role. Focus on key skills and experiences to highlight.`;

    const response = await hf.textGeneration({
      model: 'gpt2',
      inputs: prompt,
      parameters: {
        max_new_tokens: 250,
        temperature: 0.7,
      },
    });

    // Process the response into structured recommendations
    const recommendations = response.generated_text
      .split('.')
      .filter(Boolean)
      .map(rec => rec.trim());

    // Return the processed data
    return new Response(
      JSON.stringify({
        recommendations,
        cvData: {
          jobDescription,
          // Add any additional CV-specific data here
        },
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  }
});