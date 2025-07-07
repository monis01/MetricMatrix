import { Logging } from "@global.constants";

export const environment = {
  production: true,
  dev: false,
  enableMock: false,
  ARCH_URL_FUSION: "http://arch.com/api/v1/fusion",
  ARCH_URL_SAILOR: "http://arch.com/api/via/sailor",
  API_URL: "http://fusion.com",
  SAILOR_URL: "http://sailor.com",
  DEFAULT_ORG_URL: "https://www.3clogic.com/",
  GATEWAY_URL: "http://abc.com",
  logging: true,
  loggingTarget: Logging.CONSOLE
};