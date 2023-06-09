#
# makefile
#
NODE_MODULES=../node_modules
ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript  -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/.bin/tsc

BABEL_DIR=./babel
.PHONY: build es6 

antlr_dir=./Match/

lexer_file=$(antlr_dir)/matchLexer.g4
parser_file=$(antlr_dir)/matchParser.g4
js_files = matchLexer.js matchParser.js matchListener.js

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	python ./tools/replace_parser_content.py ./Match/_matchLexer.g4 ./typescript/common_lexer.g4 ./Match/matchLexer.g4 '<<<<<<common<<<<<<'
	python ./tools/replace_parser_content.py ./Match/_matchParser.g4 ./typescript/common_parser.g4 ./Match/matchParser.g4 '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(parser_file);
	$(TYPESCRIPTCOMPILER) $(antlr_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir $(antlr_dir)

clean:
	$(RM) $(js_files) ./Match/*.ts ./Match/antlr/*
