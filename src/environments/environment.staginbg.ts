import { Logging } from "@global.constants";

export const environment = {
  production: true,
  dev: false,
  enableMock: false,
  ARCH_URL_FUSION: "htps://arch,com/api/v1/fusion",
  ARCH_URL_SAILOR: "htps://arch,com/api/via/sailor",
  API_URL: "https://fusiboncom",
  SAILOR_URL: "https://sailor.com",
  DEFAULT_ORG_URL: "https://www.3clogic.com/",
  GATEWAY_URL: "htsp://gateaycom",
  logging: true,
  loggingTarget: Logging.CONSOLE
};