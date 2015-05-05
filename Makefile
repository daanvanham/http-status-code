#  Run all tests
test:
	@./node_modules/.bin/lab;

#  Run all tests and create a report in html
test-report:
	@mkdir -p report/lab;
	@./node_modules/.bin/lab -c -r html -o report/lab/index.html && echo "Lab Report generated in report/lab/index.html";

#  Run all tests and show the coverage
#  target should always be to achieve 100% code coverage, but should be at least 85% per file and 90% overall
test-coverage:
	@./node_modules/.bin/lab -c;

analysis:
	@./node_modules/.bin/plato --dir report/plato --recurse lib/ && echo "Plato Report generated in report/plato";

full-report:
	@$(MAKE) analysis test-report;

#  Run all tests and show the lint results (linting is not-configured and very tight)
test-lint:
	@find . -name "*.js" -not -path "*node_modules*" -not -path "*report*" -print0 | xargs -0 jshint;

#  Check all sources for a 'todo' and display those
todo:
	@grep -ir --exclude-dir=node_modules --exclude-dir=report --exclude=Makefile --exclude "*.html" todo * | cut -d: -f2- | tr "\t\/" " " | sed 's/^ *//';


.PHONY: test
