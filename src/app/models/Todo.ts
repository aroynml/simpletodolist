export interface Todo {
    id: number;
    title: string;
    description: string;
    priority: number;
    isCompleted: boolean;
    isHighlight: boolean;
    date?: Date;
}