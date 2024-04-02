import { TextComponent } from "./TextComponent";

// ConcreteTextComponent (Concrete Component)
export class ConcreteTextComponent implements TextComponent {
    private text: string;

    constructor(initialText: string) {
        this.text = initialText;
    }

    getText(): string {
        return this.text;
    }

    setText(newText: string): void {
        this.text = newText;
    }
}
