import { MyOwnMaterialsModule } from './my-own-materials.module';

describe('MyOwnMaterialsModule', () => {
  let myOwnMaterialsModule: MyOwnMaterialsModule;

  beforeEach(() => {
    myOwnMaterialsModule = new MyOwnMaterialsModule();
  });

  it('should create an instance', () => {
    expect(myOwnMaterialsModule).toBeTruthy();
  });
});
