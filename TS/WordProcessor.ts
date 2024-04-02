import { TextComponent } from "./TextComponent";
import { ConcreteTextComponent } from "./ConcreteTextComponent";
import { TextDecorator } from "./TextDecorator";
import { BoldDecorator } from "./BoldDecorator";

// Client (Word Processor)
export class WordProcessor {
    formatText(text: string, format: string): string {
        let textComponent: TextComponent = new ConcreteTextComponent(text);

        switch (format.toLowerCase()) {
            case "bold":
                textComponent = new BoldDecorator(textComponent);
                break;
            // Add more decorators for other formats (e.g., italic, underline)
        }

        return textComponent.getText();
    }
}
