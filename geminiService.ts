
import { GoogleGenAI, Type } from "@google/genai";
import { Problem, UserRole } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProblemAnalysis = async (problem: Problem) => {
  const prompt = `
    Analyze the following healthcare problem and provide:
    1. A concise summary.
    2. Suggested low-cost open-source technical approaches.
    3. Required expert skills (collaborator recommendations).
    4. Estimated cost optimization tips for low-resource settings.

    Problem Title: ${problem.title}
    Description: ${problem.description}
    Constraints: ${problem.resourceConstraints}
    Location: ${problem.location}
    Category: ${problem.category}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            approaches: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            requiredSkills: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            costTips: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            }
          },
          required: ["summary", "approaches", "requiredSkills", "costTips"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return null;
  }
};

export const getSolutionImprovement = async (problem: Problem, solutionContent: string) => {
  const prompt = `
    Evaluate this proposed medical solution for the following problem:
    Problem: ${problem.description}
    Proposed Solution: ${solutionContent}
    
    Provide a feasibility score (0-100) and 3 specific suggestions to reduce costs or improve reliability in remote areas.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            feasibilityScore: { type: Type.NUMBER },
            suggestions: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["feasibilityScore", "suggestions"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Solution Evaluation Error:", error);
    return null;
  }
};
