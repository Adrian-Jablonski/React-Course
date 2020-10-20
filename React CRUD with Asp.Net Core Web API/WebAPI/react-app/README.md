App Structure
-------------

- src
+---- actions
|	|
|	| -- api.js (handles all http request)
|	| -- dCandidate.js (Redux actions & action creators)
|	| -- store.js (configure redux store)
|
+---- components
|	|
|	| -- DCandidateForm.js (form operations)
|	| -- DCandidatejs (list of records)
|	| -- useForm.js (handles common form operations)
|
+---- reducers
|	|
|	| -- dCandidate.js
|	| -- index.js
|
|-- App.js
|-- index.js
|-- index.css