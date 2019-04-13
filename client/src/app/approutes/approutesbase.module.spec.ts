import { ApproutesBaseModule } from './approutesbase.module';

describe('ApproutesModule', () => {
  let approutesModule: ApproutesBaseModule;

  beforeEach(() => {
    approutesModule = new ApproutesBaseModule();
  });

  it('should create an instance', () => {
    expect(approutesModule).toBeTruthy();
  });
});
