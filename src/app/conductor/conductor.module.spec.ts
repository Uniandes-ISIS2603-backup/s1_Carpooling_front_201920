import { ConductorModule } from './conductor.module';

describe('ConductorModule', () => {
  let conductorModule: ConductorModule;

  beforeEach(() => {
    conductorModule = new ConductorModule();
  });

  it('should create an instance', () => {
    expect(conductorModule).toBeTruthy();
  });
});
