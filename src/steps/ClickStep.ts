import { Step } from './Step';
import { Page } from 'playwright';
import { StepResult } from '../types/scraping';

export class ClickStep extends Step {
  constructor(
    private selector: string,
    tab: Page,
  ) {
    if (!selector) {
      throw new Error('Selector is required');
    }
    super(tab);
  }

  public execute = async (): Promise<StepResult> => {
    try {
      const element = await this.getElement(this.selector);
      await element.click();
      ``;
      return {
        success: true,
        message: 'Click successful',
        data: undefined,
      };
    } catch (err) {
      return {
        success: false,
        message: (err as Error).message,
        data: undefined,
      };
    }
  };
}
