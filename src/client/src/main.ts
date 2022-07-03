import Ajv, { JSONSchemaType } from "ajv";
import * as characterSchema from '../src/schemas/Character.json';
import App from './App.svelte';

const app = new App({
	target: document.body
});

export const ajv = new Ajv();
export const validateCharacter = ajv.compile(characterSchema);
export const fileReader = new FileReader();

export default app;