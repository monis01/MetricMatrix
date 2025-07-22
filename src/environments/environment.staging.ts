import { Logging } from "@global.constants";

export const environment = {
  production: true,
  dev: false,
  enableMock: false,
  ARCH_URL_FUSION: "https://arch.com/api/v1/fusion",
  ARCH_URL_SAILOR: "https://arch.com/api/via/sailor",
  API_URL: "https://fusion.com",
  SAILOR_URL: "https://sailor.com",
  DEFAULT_ORG_URL: "https://www.3clogic.com/",
  GATEWAY_URL: "https://gateway.com",
  logging: true,
  loggingTarget: Logging.CONSOLE
};