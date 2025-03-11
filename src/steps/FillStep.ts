import { Step } from './Step';
import { StepResult } from '../types/scraping';
import { Page } from 'playwright';

export class FillStep extends Step {
  constructor(
    private selector: string,
    private text: string,
    tab: Page,
  ) {
    super(tab);
  }

  public execute = async (): Promise<StepResult> => {
    try {
      const element = await this.getElement(this.selector);
      await element.fill(this.text);

      return {
        success: true,
        message: `Fill element ${this.selector} with ${this.text}`,
        data: undefined,
      };
    } catch (error) {
      return {
        success: false,
        message: (error as Error).message,
        data: undefined,
      };
    }
  };
}
