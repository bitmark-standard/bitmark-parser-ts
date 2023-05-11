#
# makefile
#
NODE_MODULES=../node_modules
ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript  -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/.bin/tsc

BABEL_DIR=./babel
.PHONY: build es6 

antlr_dir=./MiscBits

lexer_file=$(antlr_dir)/bitmarkLexer.g4
parser_file=$(antlr_dir)/bitmarkParser.g4
js_files = bitmarkLexer.js bitmarkParser.js bitmarkListener.js

grammars=$(antlr_dir)/common_lexer.g4 $(antlr_dir)/common_parser.g4 $(antlr_dir)/_bitmarkLexer.g4 $(antlr_dir)/_bitmarkParser.g4 


.DEFAULT_GOAL = es6

es6: $(grammars)
	python ./tools/replace_parser_content.py ./MiscBits/_bitmarkLexer.g4 ./MiscBits/common_lexer.g4 ./MiscBits/bitmarkLexer.g4 '<<<<<<common<<<<<<'
	python ./tools/replace_parser_content.py ./MiscBits/_bitmarkParser.g4 ./MiscBits/common_parser.g4 ./MiscBits/bitmarkParser.g4 '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(parser_file);
	$(TYPESCRIPTCOMPILER) $(antlr_dir)/*.ts -experimentalDecorators --strict true --module commonjs  --target es2015 -lib es2015 --moduleResolution Node --outDir ./MiscBits

clean:
	$(RM) $(js_files) ./MiscBits/*.ts ./MiscBits/antlr/*
