#
# makefile
# Builds the bitmark parser source for Javascript bundle.
#
NODE_MODULES=../node_modules
PYTHON_EXECUTABLE=$(shell which python 2>/dev/null || which python3 2>/dev/null)

ANTLR4TS=$(NODE_MODULES)/antlr4ts
ANTLR_OPT=-Dlanguage=JavaScript -o ./
TYPESCRIPTCOMPILER=$(NODE_MODULES)/typescript/bin/tsc
RM=rm

BABEL_DIR=./babel
.PHONY: build es6 

antlr_dir=./MiscBits/
ts_dir=./TypeScript/

flashcard_lexer_file=./Flashcard/flashcardLexer.g4
flashcard_parser_file=./Flashcard/flashcardParser.g4
flashcard_js_files = flashcardLexer.js flashcardParser.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = es6

es6: $(grammar_file)
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Flashcard/_flashcardLexer.g4 $(common_lexer_file) ./Flashcard/flashcardLexer.g4 '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Flashcard/_flashcardParser.g4 $(common_parser_file) ./Flashcard/flashcardParser.g4 '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(flashcard_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(flashcard_parser_file);
	cp ./Flashcard/*.ts $(ts_dir)

clean:
	$(RM) $(js_files) ./TypeScript/* 

