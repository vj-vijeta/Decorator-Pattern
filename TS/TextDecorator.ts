import { TextComponent } from "./TextComponent";

// TextDecorator (Decorator)
export abstract class TextDecorator implements TextComponent {
    protected textComponent: TextComponent;

    constructor(textComponent: TextComponent) {
        this.textComponent = textComponent;
    }

    abstract getText(): string;
    abstract setText(newText: string): void;
}
