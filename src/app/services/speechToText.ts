import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGING_FACE_ACCESS_TOKEN);

const MODEL = 'lgris/wav2vec2-large-xlsr-open-brazilian-portuguese';

export async function speechToText(binaryAudioData: Buffer) {
  const response = await hf.automaticSpeechRecognition({
    model: MODEL,
    data: binaryAudioData,
  });

  return response.text;
}
