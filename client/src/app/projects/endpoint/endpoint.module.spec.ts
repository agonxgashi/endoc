import { EndpointModule } from './endpoint.module';

describe('ApproutesModule', () => {
  let approutesModule: EndpointModule;

  beforeEach(() => {
    approutesModule = new EndpointModule();
  });

  it('should create an instance', () => {
    expect(approutesModule).toBeTruthy();
  });
});
