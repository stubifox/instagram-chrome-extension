export enum RequestTypes {
  REQUEST_WEB_STATUS = "REQ_WEB_STATUS",
  WEB_STATUS = "WEB_STATUS",
  SET_WEB = "SET_WEB",
}
interface WebObjectRequest {
  type: RequestTypes.REQUEST_WEB_STATUS;
}

interface WebObjectResponse {
  type: RequestTypes.WEB_STATUS;
  location: string;
}

interface WebObjectSetter {
  type: RequestTypes.SET_WEB;
  location: string;
}

export type WebObjectType =
  | WebObjectRequest
  | WebObjectResponse
  | WebObjectSetter;
