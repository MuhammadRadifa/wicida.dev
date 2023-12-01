import { z } from 'astro:content'

export const coreTeamMemberSchema = z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    social: z
        .object({
            github: z.string().optional(),
            linkedin: z.string().optional(),
            facebook: z.string().optional(),
            instagram: z.string().optional(),
            twitter: z.string().optional(),
        })
        .optional(),
})
