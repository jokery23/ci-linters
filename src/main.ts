console.log('Hello World');

interface AppErrorInterface {
    field?: string;
    message: string;
    field1?: string;
}

const error: AppErrorInterface = {
    field: 'field',
    message: 'message',
    field1: 'field1'
};

console.log(error);
