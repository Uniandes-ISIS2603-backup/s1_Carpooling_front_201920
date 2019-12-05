import { PublicidadModule } from './publicidad.module';

describe('PublicidadModule', () => {
  let publicidadModule: PublicidadModule;

  beforeEach(() => {
    publicidadModule = new PublicidadModule();
  });

  it('should create an instance', () => {
    expect(publicidadModule).toBeTruthy();
  });
});
