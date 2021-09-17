export * from './authorREST.service';
import { AuthorRESTAPIService } from './authorREST.service';
export * from './bookREST.service';
import { BookRESTAPIService } from './bookREST.service';
export const APIS = [AuthorRESTAPIService, BookRESTAPIService];
