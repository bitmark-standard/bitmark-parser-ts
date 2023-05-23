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
.PHONY: build flashcard-ts

grammar_dir=./Flashcard/
ts_dir=./TypeScript/

flashcard_lexer_file=$(grammar_dir)flashcardLexer.g4
flashcard_parser_file=$(grammar_dir)flashcardParser.g4
js_files = flashcardLexer.js flashcardParser.js flashcardListener.js

common_lexer_file=./MiscBits/common_lexer.g4
common_parser_file=./MiscBits/common_parser.g4

.DEFAULT_GOAL = flashcard-ts

flashcard-ts: $(common_lexer_file) $(common_parser_file) ./Flashcard/_flashcardLexer.g4 ./Flashcard/_flashcardParser.g4
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Flashcard/_flashcardLexer.g4 $(common_lexer_file) $(flashcard_lexer_file) '<<<<<<common<<<<<<'
	$(PYTHON_EXECUTABLE) ./tools/replace_parser_content.py ./Flashcard/_flashcardParser.g4 $(common_parser_file) $(flashcard_parser_file) '<<<<<<common<<<<<<'
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(flashcard_lexer_file);
	$(NODE_MODULES)/antlr4ts-cli/antlr4ts $(ANTLR_OPT) $(flashcard_parser_file);
	cp $(grammar_dir)*.ts $(ts_dir)
	$(PYTHON_EXECUTABLE) ./tools/addjs2import.py $(ts_dir)flashcard*.ts

clean:
	$(RM) $(js_files)

