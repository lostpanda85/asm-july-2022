import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import { courseDocuments } from '../actions/courses.actions';
export interface CourseEntity {
  id: string;
  title: string;
  description: string;
  numberOfDays: number;
}

export interface CoursesState extends EntityState<CourseEntity> {}

export const adapter = createEntityAdapter<CourseEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(courseDocuments.course, (s, a) => adapter.addOne(a.payload, s)),
  on(courseDocuments.courses, (s, a) => adapter.upsertMany(a.payload, s))
);
