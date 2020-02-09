import { AsyncResolvable, ServiceIdentifier } from "./AsyncResolvable";
/**
 * @since 2.0.0
 */
export declare abstract class AbstractEmptyAsyncResolvable implements AsyncResolvable<void> {
    static readonly EMPTY_IDENTIFIER: symbol;
    abstract resolve(): Promise<void>;
    getServiceIdentifier(): ServiceIdentifier<void>;
}
