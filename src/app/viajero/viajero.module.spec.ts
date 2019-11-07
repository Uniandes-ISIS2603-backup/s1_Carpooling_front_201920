import { ViajeroModule } from './viajero.module';

describe('ViajeroModule', () => {
  let viajeroModule: ViajeroModule;

  beforeEach(() => {
    viajeroModule = new ViajeroModule();
  });

  it('should create an instance', () => {
    expect(viajeroModule).toBeTruthy();
  });
});
