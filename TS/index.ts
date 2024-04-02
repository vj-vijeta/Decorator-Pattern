import { WordProcessor } from "./WordProcessor";

// Example Usage
const wordProcessor = new WordProcessor();
const originalText = "This is a sentence.";
const formattedText = wordProcessor.formatText(originalText, "bold");
console.log("Original Text:", originalText);
console.log("Formatted Text:", formattedText);
