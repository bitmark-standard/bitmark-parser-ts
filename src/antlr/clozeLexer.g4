/*
  default lexer mode:
  [Bit Keyword]  -> non-bit-mode

  endof bit -> default mode
*/
lexer grammar clozeLexer;

S:		 [ \t] ;
OPDOT:	        '[.' ;
BitCloze:        NL OPDOT S* 'cloze'     ;
BitClozeinstgrp: NL OPDOT S* 'cloze-instruction-grouped'    ;
BitClozesolgrp:  NL OPDOT S* 'cloze-solution-grouped'    ;
BitClozeandmulti: NL OPDOT S* 'cloze-and-multiple-choice-text'    ;
BitGapText:		  NL OPDOT S* 'gap-text'     ;
BitGapTextInstructionGrouped: NL OPDOT S* 'gap-text-instruction-grouped'     ;


//----------------------------------------
OPSP:	        '[' S* ;
OPDOLL:		'[' S* '$' ;      // Dollar
OPBUL:          '[' S* '•' ;      // Bullet
OPESC:          '[^' ;      // Escaped bracketted def

OPRANGLES:    '[' '►' S* ;  // Right angle - internal link
OPRANGLEL:    '[' '▶' S* ;  // Right angle - internal link
OPDANGLE:     '[▼' S* ;  // Down angle - Anchor
OPU:		'[_' S* [-+]? ;  // Underscore
OPB:		'[!' S* '_'? ;  // Bang!
OPQ:		'[?' S* ;  // Question
OPA:		'[@' S* ;  // At
OPP:		'[+' S* [+]? ;  // Plus
OPM:		'[-' S* [-]? ;  // Minus
OPS:		'[\'' S* ; // [' Single quote
OPR:		'[*' S* ;  // [*
OPC:	       	'[%' S* ;  // [% Item
OPITEM: 	'[%item' S* ;  // [% Item
OPLEAD: 	'[%lead' S* ;  // [% lead
OPPAGENUMBER: 	'[%pageNumber' S* ;  // [% pagenumber
OPMARGINNUMBER:	'[%marginNumber' S* ;  // [% marginnumber

OPHASH:		'[#'  ;
CL:		S* ']' ;
COLON:		':' ;
AMP:		'&' ;
DBLCOLON:	'::' ;
PLUS:		'+' ;
DotAt:   	'.@' ;
Greater: 	'>' ;
Less:		'<' ;
DBLEQ:		'==' ;
RightAngle:	'►' ;
RightArrow:     '→' ;
OP_N_ETC:	'[' [@&+\-*%#!?_]+  ;
UNSCO:		'_' ;

// ********************** import the common lexer here***************
/*
    common part of the bitmark lexer

*/
COMMENT:  '||' UTF8*? '||' S* NL* ->skip ;

DCANY:  NL* '::' STRING (':' SENTENCE)? '::' (NL|.)*? '::' NL ;  // OK1

Image_type: BASIC | JPG | PNG | GIF | SVG ;
Audio_type: BASIC | MP3 | MP4 ;
Video_type: MP3 | MP2 | MP4 | FLV | GIF | WMV | MPEG | MPG ;

ArticleText: '[' S* AmpArticle COLON (.|[ \t\r\n])*? CL ;

NOTCL:    [^\]] ;
NUMERIC:  ('+'|'-')?[0-9]+ ;
STRING:   STR  ;
NL:	      ('\n'|'\r\n') ;
NOTBITMARK:  '[^' .*?  ']' ;
ELIPSIS:  ('[…'|'[...') .*? ']' ;

fragment EM0:      '\u{1F400}' .. '\u{1F4FF}' ;   // emoji 1
fragment EM2:      '\u{1F650}' .. '\u{1F9F0}' ;   // emoji 2
fragment VS0:      '\u{FE00}' .. '\u{FE0F}' ;     // Variation Selectors
//fragment SS0:    '\u{2070}' .. '\u{209C}' ;     // superscript and subscript
fragment SS0:      '\u{2000}' .. '\u{209C}' ;     // superscript and subscript + General Punctuation
fragment LEA:	   '\u{0100}' .. '\u{017F}' ;     // latin extended A
fragment LEB:	   '\u{0200}' .. '\u{024F}' ;     // latin extended B
fragment GAL:      '\u{03B1}' .. '\u{03C9}' ;     // Greek alpha α β v ...
fragment GALC:     '\u{0391}' .. '\u{03A9}' ;     // Greek alpha Capital
fragment PHON:	   '\u{1D00}' .. '\u{1DCF}' ;     // phonetic extentions


fragment ROMANIA:  [ÂâĂăÎîşŞţŢșȘțȚ] ;
fragment GERMAN:   [ÄäẞÖöÜü] ;
fragment POLISH:   [ĄąĆćĘęŁłŃńÓóŚśŹźŻż] ;
fragment TRANSL:   [ČčĎďĚěǦǧȞȟǏǐJ̌ǰǨǩĽľŇňǑǒŘřŠšŤťǓǔǙǚŽžǮǯ] ;
fragment EURO:     [☞→↓←↑€“”’…„́«»◇◼︎◎ʌɪˈ_̈₂‰≤≥‘≠Ωʳᵉ−] ;
fragment IPA:	   [ɛɜːɡʊuɔɪəɒæʌʉo] ;
fragment JAPANESE : [\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}\u{2460}-\u{24FF}\u{3001}-\u{3002}\u{3220}-\u{325F}\u{FF01}-\u{FF5E}ー「」『』〜〈〉] ;
fragment HANGUL:   '\u{AC00}}' .. '\u{D7A3}' | '~' ;

fragment
STR_SP:
  ([ :0-9̈A-Za-z_"\p{Block=Latin_1_Supplement}]|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|HANGUL|'\\'|'{'|'}')+ ;

fragment
STR_SPX:
  ([0-9̈A-Za-z_ %?@!=*+-/:#$;<>'"\p{Block=Latin_1_Supplement}]|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|HANGUL|'\\'|'{'|'}')+ ;

fragment
STR:
  ([-0-9̈A-Za-z_"\p{Block=Latin_1_Supplement}\p{Emoji}]|IPA|EM0|EM2|VS0|SS0|LEA|LEB|GAL|GALC|PHON|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|HANGUL|'\\'|'{'|'}')+ ;

SENTENCE:   // Has a space
  ([0-9A-Za-z_̈%?@!=*+-/ \t$#;"'–•●—➔^ |()\p{Block=Latin_1_Supplement}\p{Emoji}]|IPA|EM0|EM2|VS0|SS0|LEA|LEB|GAL|GALC|PHON|EURO|TRANSL|GERMAN|POLISH|ROMANIA|JAPANESE|HANGUL|'\\'|'{'|'}'|'…')+
;

BARSTRING: '|' .*? '|' ;

fragment UTF8:    [̈\u0000-\u00FF\u200c\u200d\u27CC] ;
OPAT:	 	  '[@' ;
AtProgress:       OPAT S* 'progress:'  ;  //-> AtDef
AtReference:      OPAT S* 'reference:'  ; //-> AtDef
AtWidth:	  OPAT S* 'width' ;
AtHeight:	  OPAT S* 'height' ;
AtProgressPoints: OPAT S* 'progressPoints' ;
AtShortanswer:	  OPAT S* 'shortAnswer]'  ;
AtLonganswer:	  OPAT S* 'longAnswer]' ;

AtExampleWithStr:OPAT S* 'example:' (SENTENCE|COLON|NL)* CL ;
AtExamplecol:    OPAT S* 'example:'  ;
AtExamplecl:     OPAT S* 'example]'  ;
AtSampleSolution: OPAT S* 'sampleSolution:' (SENTENCE|COLON|NL)* CL ;

AtPartialAnswerS:OPAT S* 'partialAnswer:' SENTENCE CL ;
AtPartialAnswer: OPAT S* 'partialAnswer]' ;
AtLabeltrue:     OPAT S* 'labelTrue:'  ;
AtLabelfalse:    OPAT S* 'labelFalse:'  ;
AtPoints:        OPAT S* 'points:'  ;
AtSrc:		       OPAT S* 'src' [0-9]+'x' ;  // added Sep 17
AtPartner:	     OPAT S* 'partner:' ;

OPATALT: 	       OPAT S* 'alt:' ;
OPAMARK: 	       OPAT S* 'mark:' ;
ShowInIndex:     OPAT S* 'showInIndex]' ;
OpAtCaption:     OPAT S* 'caption:' ;
OpAtLicense:	   OPAT S* 'license:' ;
OpAtCopyright:	 OPAT S* 'copyright:' ;
OpAtSearch:      OPAT S* 'search:' ;

// Boolean  property
OpAtIsTracked:	 OPAT S* 'isTracked:'  ;
OpAtIsInfoOnly:	 OPAT S* 'isInfoOnly:' ;

AtDate:		 OPAT S* 'date:' ;




Http:	  	 'http://'  ;
Https:   	 'https://'  ;
AmpAudio:	       '&audio' ;
AmpImage:	       '&image' ;
AmpImageZoom:    '&image-zoom' ;
AmpVideo:	       '&video' ;
AmpArticle:      '&article' ;
AmpDocument:     '&document' ;
AmpApp:        	 '&app' ;
AmpWebsite:      '&website' ;  // NEW added 12/2/2020 usage [.message&website]..
AmpStillImageFilm:'&still-image-film' ;  // *
AmpPdf:	         '&pdf' ;

OpAmpAudio:	     '[&' S* 'audio' ;
OpAmpImage:	     '[&' S* 'image' ;
OpAmpImageZoom:  '[&' S* 'image-zoom' ;
OpAmpVideo:	     '[&' S* 'video' ;
OpAmpArticle:    '[&' S* 'article' ;
OpAmpArticleAtt: '[&' S* 'article-attachment' ;
OpAmpDocument:   '[&' S* 'document' ;
OpAmpApp:        '[&' S* 'app' ;
OpAmpWebsite:    '[&' S* 'website' ;  // NEW added 12/2/2020 usage [.message&website]..
OpAmpStillImageFilm: '[&' S* 'still-image-film' ; 

BracEnclose:     '[' ([A-Za-z]|ROMANIA)+ ;

// Added links Aug 18 2021
AmpAudioLink:	   '&audio-link' ; 
AmpImageLink:	   '&image-link' ; 
AmpVideoLink:	   '&video-link' ; 
AmpArticleLink:  '&article-link' ; 
AmpDocumentLink: '&document-link' ;
AmpDocumentDownload: '&document-download' ; 
AmpAppLink:	     '&app-link' ;  
AmpWebsiteLink:  '&website-link' ; 
AmpStillImageFilmLink:'&still-image-film-link' ;


OpAmpAudioLink:	 '[&' S* 'audio-link' ; 
OpAmpImageLink:	 '[&' S* 'image-link' ; 
OpAmpVideoLink:	 '[&' S* 'video-link' ; 
OpAmpArticleLink:'[&' S* 'article-link' ; 
OpAmpDocumentLink:'[&' S* 'document-link' ;
OpAmpDocumentDownload:'[&' S* 'document-download' ;
OpAmpAppLink:	 '[&' S* 'app-link' ; 
OpAmpWebsiteLink:'[&' S* 'website-link' ;  
OpAmpStillImageFilmLink:'[&' S* 'still-image-film-link' ;  

AmpImageEmbed:	  '&image-embed' ; 
AmpVideoEmbed:	  '&video-embed' ; 
AmpAudioEmbed: 	  '&daudio-embed' ; 
AmpDocumentEmbed: '&document-embed' ;
AmpStillImageFilmEmbed:  '&still-image-film-embed' ;

OpAmpImageEmbed:    '[&' S* 'image-embed' ; 
OpAmpVideoEmbed:    '[&' S* 'video-embed' ; 
OpAmpAudioEmbed:    '[&' S* 'audio-embed' ; 
OpAmpDocumentEmbed: '[&' S* 'document-embed' ; 
OpAmpStillImageFilmEmbed:  '[&' S* 'still-image-film-embed' ;


BitmarkMinus: 	 ':bitmark--' ;
BitmarkPlus:  	 ':bitmark++' ;
ColonText:   	 ':text' ;
ColonJson:	 ':json' ;
Prosemirror:	 ':prosemirror' ;
Placeholder:	 ':placeholder' ;

BASIC:  ':basic' ;
JPG:    ':jpg' ;
PNG:    ':png' ;
GIF:    ':gif' ;
SVG:    ':svg' ;
MP2:    ':mp2' ;
MP3:    ':mp3' ;
MP4:    ':mp4' ;
FLV:    ':flv' ;
WMV:    ':wmv' ;
MPEG:   ':mpeg';
MPG:    ':mpg' ;

TEL:	'tel:' ;
DotArticleAtt:  '.article-attachment' ;

STAR:  '*' ;
URL: ('https'|'http'|'ftp'|'file') '://' [-a-zA-Z0-9+&@#/%?=~_|!:,.;'()*$]*([-a-zA-Z0-9+&@#/%=~_|!:,.;'()*$]|'[')+ ;



LIST_LINE:
    S* '('? [0-9]+    (')') S+ SENTENCE NL
  | S* '('? [A-Za-z]+ (')') S+ SENTENCE NL
;
ENCLBARS:	'|' .*? '|' ;



// ******************************************************************
