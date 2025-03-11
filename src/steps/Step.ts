import { ElementHandle, Page } from 'playwright';
import { StepResult } from '../types/scraping';

export abstract class Step {
  protected constructor(protected tab: Page) {}

  abstract execute(): Promise<StepResult>;

  protected getElements = async (
    selector: string,
  ): Promise<ElementHandle[]> => {
    const elements = await this.tab.$$(selector);

    if (!elements?.length) {
      return [];
    }
    return elements;
  };

  protected getElement = async (selector: string): Promise<ElementHandle> => {
    const elements = await this.getElements(selector);

    if (!elements?.length) {
      throw new Error(`Element ${selector} not found`);
    }

    return elements[0];
  };
}
