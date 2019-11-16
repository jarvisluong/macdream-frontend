/* Options:
Date: 2019-11-16 13:38:13
Version: 5.70
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://167.172.165.116

//GlobalNamespace: 
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export class TransactionDto
{
    public paymentDt: string;
    public description: string;

    public constructor(init?: Partial<TransactionDto>) { (Object as any).assign(this, init); }
}

export class PersonJson
{
    public id: number;
    public name: string;
    public transactions: TransactionDto[];

    public constructor(init?: Partial<PersonJson>) { (Object as any).assign(this, init); }
}

export class QueryBase
{
    // @DataMember(Order=1)
    public skip: number;

    // @DataMember(Order=2)
    public take: number;

    // @DataMember(Order=3)
    public orderBy: string;

    // @DataMember(Order=4)
    public orderByDesc: string;

    // @DataMember(Order=5)
    public include: string;

    // @DataMember(Order=6)
    public fields: string;

    // @DataMember(Order=7)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<QueryBase>) { (Object as any).assign(this, init); }
}

export class QueryDb<T> extends QueryBase
{

    public constructor(init?: Partial<QueryDb<T>>) { super(init); (Object as any).assign(this, init); }
}

export enum GoalTypeEnum
{
    Purchase = 'Purchase',
    CashSaving = 'CashSaving',
    Investing = 'Investing',
}

export class GoalTbl
{
    public id: number;
    // @References(Type=typeof(PersonTbl))
    public personId: number;

    // @Required()
    public targetDt: string;

    // @Required()
    public goalType: GoalTypeEnum;

    public price: number;
    // @StringLength(MaximumLength=100, MinimumLength=1)
    public name: string;

    // @StringLength(MaximumLength=255, MinimumLength=1)
    public description: string;

    public constructor(init?: Partial<GoalTbl>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1, EmitDefaultValue=false)
    public errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    public fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    public message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseError>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message: string;

    // @DataMember(Order=3)
    public stackTrace: string;

    // @DataMember(Order=4)
    public errors: ResponseError[];

    // @DataMember(Order=5)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseStatus>) { (Object as any).assign(this, init); }
}

export class PersonTbl
{
    public id: number;
    // @StringLength(MaximumLength=255, MinimumLength=1)
    public name: string;

    public constructor(init?: Partial<PersonTbl>) { (Object as any).assign(this, init); }
}

export enum VisaMccEnum
{
    Missing = 0,
    Electronics = 1234,
    Coffee = 1235,
    Rent = 1236,
    Food = 1237,
    Alcohol = 1238,
}

export class TransactionTbl
{
    public id: number;
    // @References(Type=typeof(PersonTbl))
    public personId: number;

    // @Required()
    public paymentDt: string;

    public price: number;
    // @Required()
    public visaMcc: VisaMccEnum;

    // @StringLength(MaximumLength=255, MinimumLength=1)
    public description: string;

    public constructor(init?: Partial<TransactionTbl>) { (Object as any).assign(this, init); }
}

export class GetAllThePeopleAndTransactionsResponse
{
    public people: PersonJson[];

    public constructor(init?: Partial<GetAllThePeopleAndTransactionsResponse>) { (Object as any).assign(this, init); }
}

export class InsertNewTransactionResponse
{
    public newTransactionId: number;

    public constructor(init?: Partial<InsertNewTransactionResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class QueryResponse<T>
{
    // @DataMember(Order=1)
    public offset: number;

    // @DataMember(Order=2)
    public total: number;

    // @DataMember(Order=3)
    public results: T[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    // @DataMember(Order=5)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<QueryResponse<T>>) { (Object as any).assign(this, init); }
}

// @Route("/demo", "GET")
export class GetAllThePeopleAndTransactionsRequest implements IReturn<GetAllThePeopleAndTransactionsResponse>
{

    public constructor(init?: Partial<GetAllThePeopleAndTransactionsRequest>) { (Object as any).assign(this, init); }
    public createResponse() { return new GetAllThePeopleAndTransactionsResponse(); }
    public getTypeName() { return 'GetAllThePeopleAndTransactionsRequest'; }
}

// @Route("/transactions/new", "POST")
export class InsertNewTransactionRequest implements IReturn<InsertNewTransactionResponse>
{
    public personId: number;

    public constructor(init?: Partial<InsertNewTransactionRequest>) { (Object as any).assign(this, init); }
    public createResponse() { return new InsertNewTransactionResponse(); }
    public getTypeName() { return 'InsertNewTransactionRequest'; }
}

// @Route("/autoquery/goals")
export class QueryGoals extends QueryDb<GoalTbl> implements IReturn<QueryResponse<GoalTbl>>
{

    public constructor(init?: Partial<QueryGoals>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<GoalTbl>(); }
    public getTypeName() { return 'QueryGoals'; }
}

// @Route("/autoquery/persons")
export class QueryPersons extends QueryDb<PersonTbl> implements IReturn<QueryResponse<PersonTbl>>
{

    public constructor(init?: Partial<QueryPersons>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<PersonTbl>(); }
    public getTypeName() { return 'QueryPersons'; }
}

// @Route("/autoquery/transactions")
export class QueryTransactions extends QueryDb<TransactionTbl> implements IReturn<QueryResponse<TransactionTbl>>
{

    public constructor(init?: Partial<QueryTransactions>) { super(init); (Object as any).assign(this, init); }
    public createResponse() { return new QueryResponse<TransactionTbl>(); }
    public getTypeName() { return 'QueryTransactions'; }
}

