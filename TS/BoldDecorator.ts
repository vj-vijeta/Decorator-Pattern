import { TextDecorator } from "./TextDecorator";

// ConcreteTextDecorator (Concrete Decorator)
export class BoldDecorator extends TextDecorator {
    getText(): string {
        return `<b>${this.textComponent.getText()}</b>`;
    }

    setText(newText: string): void {
        this.textComponent.setText(newText);
    }
}
