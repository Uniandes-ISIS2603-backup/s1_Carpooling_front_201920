import { PublicistaModule } from './publicista.module';

describe('PublicistaModule', () => {
  let publicistaModule: PublicistaModule;

  beforeEach(() => {
    publicistaModule = new PublicistaModule();
  });

  it('should create an instance', () => {
    expect(publicistaModule).toBeTruthy();
  });
});
