import { createProviderDefinedToolFactory } from '@ai-sdk/provider-utils';
import { z } from 'zod/v4';

// Args validation schema
export const codeInterpreterArgsSchema = z.object({
  container: z.union([
    z.object({
      type: z.literal('auto'),
      file_ids: z.array(z.string()),
    }),
    z.string(),
  ]),
});

export const codeInterpreter = createProviderDefinedToolFactory<
  {
    // Code interpreter doesn't take input parameters - it's controlled by the prompt
  },
  {
    container: { type: 'auto'; file_ids: string[] } | string;
  }
>({
  id: 'openai.code_interpreter',
  name: 'code_interpreter',
  inputSchema: z.object({}),
});
