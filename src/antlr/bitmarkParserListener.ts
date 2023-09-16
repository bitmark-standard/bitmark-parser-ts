// Generated from ./antlr/bitmarkParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener.js";

import { BitmarkContext } from "./bitmarkParser.js";
import { Bitmark_Context } from "./bitmarkParser.js";
import { BitContext } from "./bitmarkParser.js";
import { BookContext } from "./bitmarkParser.js";
import { ChapterContext } from "./bitmarkParser.js";
import { Ai_promptContext } from "./bitmarkParser.js";
import { Note_aiContext } from "./bitmarkParser.js";
import { Summary_aiContext } from "./bitmarkParser.js";
import { Article_aiContext } from "./bitmarkParser.js";
import { TocContext } from "./bitmarkParser.js";
import { SummaryContext } from "./bitmarkParser.js";
import { Internal_linkContext } from "./bitmarkParser.js";
import { Bit_aliasContext } from "./bitmarkParser.js";
import { Title_etcContext } from "./bitmarkParser.js";
import { Group_bornContext } from "./bitmarkParser.js";
import { Group_diedContext } from "./bitmarkParser.js";
import { Learning_path_ltiContext } from "./bitmarkParser.js";
import { Learning_path_stepContext } from "./bitmarkParser.js";
import { Learning_path_bookContext } from "./bitmarkParser.js";
import { Learning_path_signContext } from "./bitmarkParser.js";
import { Learning_path_video_callContext } from "./bitmarkParser.js";
import { Learning_path_learning_goalContext } from "./bitmarkParser.js";
import { Learning_path_closingContext } from "./bitmarkParser.js";
import { Learning_path_feedbackContext } from "./bitmarkParser.js";
import { Learning_path_bot_trainingContext } from "./bitmarkParser.js";
import { Learning_path_external_linkContext } from "./bitmarkParser.js";
import { Learning_path_classroom_trainingContext } from "./bitmarkParser.js";
import { Learning_path_classroom_eventContext } from "./bitmarkParser.js";
import { Bot_action_sendContext } from "./bitmarkParser.js";
import { Bot_action_announceContext } from "./bitmarkParser.js";
import { Bot_action_saveContext } from "./bitmarkParser.js";
import { Bot_action_remindContext } from "./bitmarkParser.js";
import { Bot_action_responseContext } from "./bitmarkParser.js";
import { Bot_action_true_falseContext } from "./bitmarkParser.js";
import { Bot_action_rating_numberContext } from "./bitmarkParser.js";
import { Bot_action_rating_starsContext } from "./bitmarkParser.js";
import { Bot_actionContext } from "./bitmarkParser.js";
import { Bo_actionsContext } from "./bitmarkParser.js";
import { BoactsContext } from "./bitmarkParser.js";
import { FeedbackContext } from "./bitmarkParser.js";
import { FooterContext } from "./bitmarkParser.js";
import { BitElemContext } from "./bitmarkParser.js";
import { GapContext } from "./bitmarkParser.js";
import { Single_gapContext } from "./bitmarkParser.js";
import { Choice_plusContext } from "./bitmarkParser.js";
import { Choice_minusContext } from "./bitmarkParser.js";
import { Choice_starContext } from "./bitmarkParser.js";
import { EssayContext } from "./bitmarkParser.js";
import { Ml_exampleContext } from "./bitmarkParser.js";
import { PartansContext } from "./bitmarkParser.js";
import { ResourceContext } from "./bitmarkParser.js";
import { CorrectionContext } from "./bitmarkParser.js";
import { CorrsContext } from "./bitmarkParser.js";
import { Mark_Context } from "./bitmarkParser.js";
import { Mark_textContext } from "./bitmarkParser.js";
import { Mark_colorContext } from "./bitmarkParser.js";
import { Take_audioContext } from "./bitmarkParser.js";
import { Take_pictureContext } from "./bitmarkParser.js";
import { Record_audioContext } from "./bitmarkParser.js";
import { Preparation_noteContext } from "./bitmarkParser.js";
import { AssignmentContext } from "./bitmarkParser.js";
import { ArticleContext } from "./bitmarkParser.js";
import { StatementContext } from "./bitmarkParser.js";
import { DetailsContext } from "./bitmarkParser.js";
import { Sample_solutionContext } from "./bitmarkParser.js";
import { ButtoncopytextContext } from "./bitmarkParser.js";
import { WbtcontinueContext } from "./bitmarkParser.js";
import { LearningpathdetailsContext } from "./bitmarkParser.js";
import { PageContext } from "./bitmarkParser.js";
import { NoteContext } from "./bitmarkParser.js";
import { InfoContext } from "./bitmarkParser.js";
import { WarningContext } from "./bitmarkParser.js";
import { RemarkContext } from "./bitmarkParser.js";
import { HelpContext } from "./bitmarkParser.js";
import { DangerContext } from "./bitmarkParser.js";
import { BugContext } from "./bitmarkParser.js";
import { SidenoteContext } from "./bitmarkParser.js";
import { StickynoteContext } from "./bitmarkParser.js";
import { QuoteContext } from "./bitmarkParser.js";
import { FootnoteContext } from "./bitmarkParser.js";
import { HintbitContext } from "./bitmarkParser.js";
import { ExamplebitContext } from "./bitmarkParser.js";
import { Vendor_padlet_embedContext } from "./bitmarkParser.js";
import { ScormContext } from "./bitmarkParser.js";
import { Bit_imageContext } from "./bitmarkParser.js";
import { Bit_imageLinkContext } from "./bitmarkParser.js";
import { Bit_imageZoomContext } from "./bitmarkParser.js";
import { Bit_imagePrototypeContext } from "./bitmarkParser.js";
import { Bit_imageSuperWideContext } from "./bitmarkParser.js";
import { Bit_audioContext } from "./bitmarkParser.js";
import { Bit_audioLinkContext } from "./bitmarkParser.js";
import { Bit_audioEmbedContext } from "./bitmarkParser.js";
import { Bit_videoContext } from "./bitmarkParser.js";
import { Bit_videoLinkContext } from "./bitmarkParser.js";
import { Bit_videoEmbedContext } from "./bitmarkParser.js";
import { Bit_videoPortraitContext } from "./bitmarkParser.js";
import { Bit_videoLandscapeContext } from "./bitmarkParser.js";
import { Bit_stillImageFilmContext } from "./bitmarkParser.js";
import { Bit_stillImageFilmLinkContext } from "./bitmarkParser.js";
import { Bit_stillImageFilmEmbedContext } from "./bitmarkParser.js";
import { Bit_websiteLinkContext } from "./bitmarkParser.js";
import { Bit_documentContext } from "./bitmarkParser.js";
import { Bit_documentLinkContext } from "./bitmarkParser.js";
import { Bit_documentEmbedContext } from "./bitmarkParser.js";
import { Bit_documentDownloadContext } from "./bitmarkParser.js";
import { Bit_appLinkContext } from "./bitmarkParser.js";
import { Bit_editorialContext } from "./bitmarkParser.js";
import { Book_frontispieceContext } from "./bitmarkParser.js";
import { Book_titleContext } from "./bitmarkParser.js";
import { Book_copyrightContext } from "./bitmarkParser.js";
import { Book_dedicationContext } from "./bitmarkParser.js";
import { Book_forwordContext } from "./bitmarkParser.js";
import { Book_prefaceContext } from "./bitmarkParser.js";
import { Book_prologueContext } from "./bitmarkParser.js";
import { Book_epilogueContext } from "./bitmarkParser.js";
import { Book_introductionContext } from "./bitmarkParser.js";
import { Book_inciting_incidentContext } from "./bitmarkParser.js";
import { Book_conclusionContext } from "./bitmarkParser.js";
import { Book_afterwordContext } from "./bitmarkParser.js";
import { Book_postscriptContext } from "./bitmarkParser.js";
import { Book_appendixContext } from "./bitmarkParser.js";
import { Book_addendumContext } from "./bitmarkParser.js";
import { Book_acknowledgmentsContext } from "./bitmarkParser.js";
import { Book_list_of_contributorsContext } from "./bitmarkParser.js";
import { Book_bibliographyContext } from "./bitmarkParser.js";
import { Book_reference_listContext } from "./bitmarkParser.js";
import { Book_endnotesContext } from "./bitmarkParser.js";
import { Book_notesContext } from "./bitmarkParser.js";
import { Book_copyright_permissionsContext } from "./bitmarkParser.js";
import { Book_teaserContext } from "./bitmarkParser.js";
import { Book_auther_bioContext } from "./bitmarkParser.js";
import { Book_request_for_a_book_reviewContext } from "./bitmarkParser.js";
import { Book_coming_soonContext } from "./bitmarkParser.js";
import { Book_read_moreContext } from "./bitmarkParser.js";
import { Book_summaryContext } from "./bitmarkParser.js";
import { Book_epigraphContext } from "./bitmarkParser.js";
import { CodeContext } from "./bitmarkParser.js";
import { Card1Context } from "./bitmarkParser.js";
import { Question1Context } from "./bitmarkParser.js";
import { ScreenshotContext } from "./bitmarkParser.js";
import { Focus_imageContext } from "./bitmarkParser.js";
import { PhotoContext } from "./bitmarkParser.js";
import { Browser_imageContext } from "./bitmarkParser.js";
import { Chapter_subject_matterContext } from "./bitmarkParser.js";
import { Release_noteContext } from "./bitmarkParser.js";
import { ConclusionContext } from "./bitmarkParser.js";
import { FeaturedContext } from "./bitmarkParser.js";
import { Vendor_amcharts_5_chartContext } from "./bitmarkParser.js";
import { Newspaper_articleContext } from "./bitmarkParser.js";
import { Blog_articleContext } from "./bitmarkParser.js";
import { Book_articleContext } from "./bitmarkParser.js";
import { Notebook_articleContext } from "./bitmarkParser.js";
import { Workbook_articleContext } from "./bitmarkParser.js";
import { Release_notes_summaryContext } from "./bitmarkParser.js";
import { MessageContext } from "./bitmarkParser.js";
import { Cook_preparationContext } from "./bitmarkParser.js";
import { Cook_stepContext } from "./bitmarkParser.js";
import { Cook_ingredientsContext } from "./bitmarkParser.js";
import { Cook_remarkContext } from "./bitmarkParser.js";
import { Cook_variationContext } from "./bitmarkParser.js";
import { Cook_insertContext } from "./bitmarkParser.js";
import { Cook_arrangementContext } from "./bitmarkParser.js";
import { Cook_practice_adviseContext } from "./bitmarkParser.js";
import { Cook_plateContext } from "./bitmarkParser.js";
import { Cook_recommendationContext } from "./bitmarkParser.js";
import { Cook_personal_recommendationContext } from "./bitmarkParser.js";
import { Cook_side_drinkContext } from "./bitmarkParser.js";
import { Cook_side_dishContext } from "./bitmarkParser.js";
import { Cook_timerContext } from "./bitmarkParser.js";
import { Lang_learning_outcomesContext } from "./bitmarkParser.js";
import { Lang_enabling_language_skillsContext } from "./bitmarkParser.js";
import { Lang_life_skillsContext } from "./bitmarkParser.js";
import { Lang_english_around_worldContext } from "./bitmarkParser.js";
import { Lang_good_to_knowContext } from "./bitmarkParser.js";
import { Lang_learning_strategyContext } from "./bitmarkParser.js";
import { Lang_like_a_localContext } from "./bitmarkParser.js";
import { Lang_useful_phrasesContext } from "./bitmarkParser.js";
import { Lang_level_downContext } from "./bitmarkParser.js";
import { Lang_level_upContext } from "./bitmarkParser.js";
import { Lang_extra_activityContext } from "./bitmarkParser.js";
import { Lang_video_scriptContext } from "./bitmarkParser.js";
import { Lang_audio_scriptContext } from "./bitmarkParser.js";
import { Lang_vocabularyContext } from "./bitmarkParser.js";
import { Lang_homeworkContext } from "./bitmarkParser.js";
import { Lang_teacher_noteContext } from "./bitmarkParser.js";
import { Review_noteContext } from "./bitmarkParser.js";
import { Review_author_noteContext } from "./bitmarkParser.js";
import { Review_reviewer_noteContext } from "./bitmarkParser.js";
import { Review_request_for_review_noteContext } from "./bitmarkParser.js";
import { Review_approved_noteContext } from "./bitmarkParser.js";
import { ChecklistContext } from "./bitmarkParser.js";
import { Video_transcriptContext } from "./bitmarkParser.js";
import { Audio_transcriptContext } from "./bitmarkParser.js";
import { Image_portraitContext } from "./bitmarkParser.js";
import { Image_landscapeContext } from "./bitmarkParser.js";
import { Image_on_deviceContext } from "./bitmarkParser.js";
import { Bitmark_exampleContext } from "./bitmarkParser.js";
import { App_ai_promptContext } from "./bitmarkParser.js";
import { Book_linkContext } from "./bitmarkParser.js";
import { Book_link_nextContext } from "./bitmarkParser.js";
import { Book_link_prevContext } from "./bitmarkParser.js";
import { FigureContext } from "./bitmarkParser.js";
import { Video_link_landscapeContext } from "./bitmarkParser.js";
import { Video_link_portraitContext } from "./bitmarkParser.js";
import { Bot_choiceContext } from "./bitmarkParser.js";
import { RatingContext } from "./bitmarkParser.js";
import { Bullet_itemContext } from "./bitmarkParser.js";
import { SurveyContext } from "./bitmarkParser.js";
import { Survey_1Context } from "./bitmarkParser.js";
import { Survey_anonymousContext } from "./bitmarkParser.js";
import { Survey_anonymous_1Context } from "./bitmarkParser.js";
import { Self_assessmentContext } from "./bitmarkParser.js";
import { Self_assess_s_and_wContext } from "./bitmarkParser.js";
import { AtpointContext } from "./bitmarkParser.js";
import { FormatContext } from "./bitmarkParser.js";
import { Resource_formatContext } from "./bitmarkParser.js";
import { Resource_format_extraContext } from "./bitmarkParser.js";
import { Format2Context } from "./bitmarkParser.js";
import { Image_formatContext } from "./bitmarkParser.js";
import { Video_formatContext } from "./bitmarkParser.js";
import { Article_formatContext } from "./bitmarkParser.js";
import { Document_formatContext } from "./bitmarkParser.js";
import { App_formatContext } from "./bitmarkParser.js";
import { Website_formatContext } from "./bitmarkParser.js";
import { Stillimagefilm_formatContext } from "./bitmarkParser.js";
import { Op_article_formatContext } from "./bitmarkParser.js";
import { Op_document_formatContext } from "./bitmarkParser.js";
import { Op_app_formatContext } from "./bitmarkParser.js";
import { Op_website_formatContext } from "./bitmarkParser.js";
import { Op_video_formatContext } from "./bitmarkParser.js";
import { Op_stillimagefilm_formatContext } from "./bitmarkParser.js";
import { ArticlebitContext } from "./bitmarkParser.js";
import { DocumentbitContext } from "./bitmarkParser.js";
import { WebsitebitContext } from "./bitmarkParser.js";
import { AppbitContext } from "./bitmarkParser.js";
import { StillimagefilmbitContext } from "./bitmarkParser.js";
import { Stillimg_oneContext } from "./bitmarkParser.js";
import { VideobitContext } from "./bitmarkParser.js";
import { Video_oneContext } from "./bitmarkParser.js";
import { ImagebitContext } from "./bitmarkParser.js";
import { Image_oneContext } from "./bitmarkParser.js";
import { Op_image_formatContext } from "./bitmarkParser.js";
import { Image_chainedContext } from "./bitmarkParser.js";
import { Image_chained4matchContext } from "./bitmarkParser.js";
import { AudiobitContext } from "./bitmarkParser.js";
import { Audio_oneContext } from "./bitmarkParser.js";
import { Audio_formatContext } from "./bitmarkParser.js";
import { Op_audio_formatContext } from "./bitmarkParser.js";
import { Resource_chainedContext } from "./bitmarkParser.js";
import { TelephoneContext } from "./bitmarkParser.js";
import { UrlContext } from "./bitmarkParser.js";
import { ItemContext } from "./bitmarkParser.js";
import { LeadContext } from "./bitmarkParser.js";
import { AnglerefContext } from "./bitmarkParser.js";
import { ExampleContext } from "./bitmarkParser.js";
import { Bracketed_textContext } from "./bitmarkParser.js";
import { ReferenceContext } from "./bitmarkParser.js";
import { ProgressContext } from "./bitmarkParser.js";
import { DatepropContext } from "./bitmarkParser.js";
import { Dateprop_chainedContext } from "./bitmarkParser.js";
import { InstructionContext } from "./bitmarkParser.js";
import { HintContext } from "./bitmarkParser.js";
import { TitleContext } from "./bitmarkParser.js";
import { Bool_labelContext } from "./bitmarkParser.js";
import { Progress_pointsContext } from "./bitmarkParser.js";
import { IstrackedContext } from "./bitmarkParser.js";
import { IsinfoonlyContext } from "./bitmarkParser.js";
import { AtdefContext } from "./bitmarkParser.js";
import { Atdef_Context } from "./bitmarkParser.js";
import { DollaransContext } from "./bitmarkParser.js";
import { AnchorContext } from "./bitmarkParser.js";
import { LinesContext } from "./bitmarkParser.js";
import { S_and_wContext } from "./bitmarkParser.js";
import { DclinesContext } from "./bitmarkParser.js";
import { ClnspContext } from "./bitmarkParser.js";
import { SsplContext } from "./bitmarkParser.js";
import { WordsContext } from "./bitmarkParser.js";
import { SpContext } from "./bitmarkParser.js";
import { SentenceContext } from "./bitmarkParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `bitmarkParser`.
 */
export interface bitmarkParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `bitmarkParser.bitmark`.
	 * @param ctx the parse tree
	 */
	enterBitmark?: (ctx: BitmarkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bitmark`.
	 * @param ctx the parse tree
	 */
	exitBitmark?: (ctx: BitmarkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	enterBitmark_?: (ctx: Bitmark_Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bitmark_`.
	 * @param ctx the parse tree
	 */
	exitBitmark_?: (ctx: Bitmark_Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit`.
	 * @param ctx the parse tree
	 */
	enterBit?: (ctx: BitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit`.
	 * @param ctx the parse tree
	 */
	exitBit?: (ctx: BitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book`.
	 * @param ctx the parse tree
	 */
	enterBook?: (ctx: BookContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book`.
	 * @param ctx the parse tree
	 */
	exitBook?: (ctx: BookContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.chapter`.
	 * @param ctx the parse tree
	 */
	enterChapter?: (ctx: ChapterContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.chapter`.
	 * @param ctx the parse tree
	 */
	exitChapter?: (ctx: ChapterContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.ai_prompt`.
	 * @param ctx the parse tree
	 */
	enterAi_prompt?: (ctx: Ai_promptContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.ai_prompt`.
	 * @param ctx the parse tree
	 */
	exitAi_prompt?: (ctx: Ai_promptContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.note_ai`.
	 * @param ctx the parse tree
	 */
	enterNote_ai?: (ctx: Note_aiContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.note_ai`.
	 * @param ctx the parse tree
	 */
	exitNote_ai?: (ctx: Note_aiContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.summary_ai`.
	 * @param ctx the parse tree
	 */
	enterSummary_ai?: (ctx: Summary_aiContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.summary_ai`.
	 * @param ctx the parse tree
	 */
	exitSummary_ai?: (ctx: Summary_aiContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.article_ai`.
	 * @param ctx the parse tree
	 */
	enterArticle_ai?: (ctx: Article_aiContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.article_ai`.
	 * @param ctx the parse tree
	 */
	exitArticle_ai?: (ctx: Article_aiContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.toc`.
	 * @param ctx the parse tree
	 */
	enterToc?: (ctx: TocContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.toc`.
	 * @param ctx the parse tree
	 */
	exitToc?: (ctx: TocContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.summary`.
	 * @param ctx the parse tree
	 */
	enterSummary?: (ctx: SummaryContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.summary`.
	 * @param ctx the parse tree
	 */
	exitSummary?: (ctx: SummaryContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.internal_link`.
	 * @param ctx the parse tree
	 */
	enterInternal_link?: (ctx: Internal_linkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.internal_link`.
	 * @param ctx the parse tree
	 */
	exitInternal_link?: (ctx: Internal_linkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_alias`.
	 * @param ctx the parse tree
	 */
	enterBit_alias?: (ctx: Bit_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_alias`.
	 * @param ctx the parse tree
	 */
	exitBit_alias?: (ctx: Bit_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.title_etc`.
	 * @param ctx the parse tree
	 */
	enterTitle_etc?: (ctx: Title_etcContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.title_etc`.
	 * @param ctx the parse tree
	 */
	exitTitle_etc?: (ctx: Title_etcContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.group_born`.
	 * @param ctx the parse tree
	 */
	enterGroup_born?: (ctx: Group_bornContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.group_born`.
	 * @param ctx the parse tree
	 */
	exitGroup_born?: (ctx: Group_bornContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.group_died`.
	 * @param ctx the parse tree
	 */
	enterGroup_died?: (ctx: Group_diedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.group_died`.
	 * @param ctx the parse tree
	 */
	exitGroup_died?: (ctx: Group_diedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_lti`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_lti?: (ctx: Learning_path_ltiContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_lti`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_lti?: (ctx: Learning_path_ltiContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_step`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_step?: (ctx: Learning_path_stepContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_step`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_step?: (ctx: Learning_path_stepContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_book`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_book?: (ctx: Learning_path_bookContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_book`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_book?: (ctx: Learning_path_bookContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_sign`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_sign?: (ctx: Learning_path_signContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_sign`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_sign?: (ctx: Learning_path_signContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_video_call`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_video_call?: (ctx: Learning_path_video_callContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_video_call`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_video_call?: (ctx: Learning_path_video_callContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_learning_goal`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_learning_goal?: (ctx: Learning_path_learning_goalContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_learning_goal`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_learning_goal?: (ctx: Learning_path_learning_goalContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_closing`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_closing?: (ctx: Learning_path_closingContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_closing`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_closing?: (ctx: Learning_path_closingContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_feedback`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_feedback?: (ctx: Learning_path_feedbackContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_feedback`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_feedback?: (ctx: Learning_path_feedbackContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_bot_training`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_bot_training?: (ctx: Learning_path_bot_trainingContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_bot_training`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_bot_training?: (ctx: Learning_path_bot_trainingContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_external_link`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_external_link?: (ctx: Learning_path_external_linkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_external_link`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_external_link?: (ctx: Learning_path_external_linkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_classroom_training`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_classroom_training?: (ctx: Learning_path_classroom_trainingContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_classroom_training`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_classroom_training?: (ctx: Learning_path_classroom_trainingContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learning_path_classroom_event`.
	 * @param ctx the parse tree
	 */
	enterLearning_path_classroom_event?: (ctx: Learning_path_classroom_eventContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learning_path_classroom_event`.
	 * @param ctx the parse tree
	 */
	exitLearning_path_classroom_event?: (ctx: Learning_path_classroom_eventContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_send`.
	 * @param ctx the parse tree
	 */
	enterBot_action_send?: (ctx: Bot_action_sendContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_send`.
	 * @param ctx the parse tree
	 */
	exitBot_action_send?: (ctx: Bot_action_sendContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_announce`.
	 * @param ctx the parse tree
	 */
	enterBot_action_announce?: (ctx: Bot_action_announceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_announce`.
	 * @param ctx the parse tree
	 */
	exitBot_action_announce?: (ctx: Bot_action_announceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_save`.
	 * @param ctx the parse tree
	 */
	enterBot_action_save?: (ctx: Bot_action_saveContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_save`.
	 * @param ctx the parse tree
	 */
	exitBot_action_save?: (ctx: Bot_action_saveContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_remind`.
	 * @param ctx the parse tree
	 */
	enterBot_action_remind?: (ctx: Bot_action_remindContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_remind`.
	 * @param ctx the parse tree
	 */
	exitBot_action_remind?: (ctx: Bot_action_remindContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_response`.
	 * @param ctx the parse tree
	 */
	enterBot_action_response?: (ctx: Bot_action_responseContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_response`.
	 * @param ctx the parse tree
	 */
	exitBot_action_response?: (ctx: Bot_action_responseContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_true_false`.
	 * @param ctx the parse tree
	 */
	enterBot_action_true_false?: (ctx: Bot_action_true_falseContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_true_false`.
	 * @param ctx the parse tree
	 */
	exitBot_action_true_false?: (ctx: Bot_action_true_falseContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_rating_number`.
	 * @param ctx the parse tree
	 */
	enterBot_action_rating_number?: (ctx: Bot_action_rating_numberContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_rating_number`.
	 * @param ctx the parse tree
	 */
	exitBot_action_rating_number?: (ctx: Bot_action_rating_numberContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action_rating_stars`.
	 * @param ctx the parse tree
	 */
	enterBot_action_rating_stars?: (ctx: Bot_action_rating_starsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action_rating_stars`.
	 * @param ctx the parse tree
	 */
	exitBot_action_rating_stars?: (ctx: Bot_action_rating_starsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_action`.
	 * @param ctx the parse tree
	 */
	enterBot_action?: (ctx: Bot_actionContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_action`.
	 * @param ctx the parse tree
	 */
	exitBot_action?: (ctx: Bot_actionContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bo_actions`.
	 * @param ctx the parse tree
	 */
	enterBo_actions?: (ctx: Bo_actionsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bo_actions`.
	 * @param ctx the parse tree
	 */
	exitBo_actions?: (ctx: Bo_actionsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.boacts`.
	 * @param ctx the parse tree
	 */
	enterBoacts?: (ctx: BoactsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.boacts`.
	 * @param ctx the parse tree
	 */
	exitBoacts?: (ctx: BoactsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.feedback`.
	 * @param ctx the parse tree
	 */
	enterFeedback?: (ctx: FeedbackContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.feedback`.
	 * @param ctx the parse tree
	 */
	exitFeedback?: (ctx: FeedbackContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.footer`.
	 * @param ctx the parse tree
	 */
	enterFooter?: (ctx: FooterContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.footer`.
	 * @param ctx the parse tree
	 */
	exitFooter?: (ctx: FooterContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bitElem`.
	 * @param ctx the parse tree
	 */
	enterBitElem?: (ctx: BitElemContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bitElem`.
	 * @param ctx the parse tree
	 */
	exitBitElem?: (ctx: BitElemContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.gap`.
	 * @param ctx the parse tree
	 */
	enterGap?: (ctx: GapContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.gap`.
	 * @param ctx the parse tree
	 */
	exitGap?: (ctx: GapContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.single_gap`.
	 * @param ctx the parse tree
	 */
	enterSingle_gap?: (ctx: Single_gapContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.single_gap`.
	 * @param ctx the parse tree
	 */
	exitSingle_gap?: (ctx: Single_gapContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	enterChoice_plus?: (ctx: Choice_plusContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.choice_plus`.
	 * @param ctx the parse tree
	 */
	exitChoice_plus?: (ctx: Choice_plusContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	enterChoice_minus?: (ctx: Choice_minusContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.choice_minus`.
	 * @param ctx the parse tree
	 */
	exitChoice_minus?: (ctx: Choice_minusContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.choice_star`.
	 * @param ctx the parse tree
	 */
	enterChoice_star?: (ctx: Choice_starContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.choice_star`.
	 * @param ctx the parse tree
	 */
	exitChoice_star?: (ctx: Choice_starContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.essay`.
	 * @param ctx the parse tree
	 */
	enterEssay?: (ctx: EssayContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.essay`.
	 * @param ctx the parse tree
	 */
	exitEssay?: (ctx: EssayContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.ml_example`.
	 * @param ctx the parse tree
	 */
	enterMl_example?: (ctx: Ml_exampleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.ml_example`.
	 * @param ctx the parse tree
	 */
	exitMl_example?: (ctx: Ml_exampleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.partans`.
	 * @param ctx the parse tree
	 */
	enterPartans?: (ctx: PartansContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.partans`.
	 * @param ctx the parse tree
	 */
	exitPartans?: (ctx: PartansContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.correction`.
	 * @param ctx the parse tree
	 */
	enterCorrection?: (ctx: CorrectionContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.correction`.
	 * @param ctx the parse tree
	 */
	exitCorrection?: (ctx: CorrectionContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.corrs`.
	 * @param ctx the parse tree
	 */
	enterCorrs?: (ctx: CorrsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.corrs`.
	 * @param ctx the parse tree
	 */
	exitCorrs?: (ctx: CorrsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.mark_`.
	 * @param ctx the parse tree
	 */
	enterMark_?: (ctx: Mark_Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.mark_`.
	 * @param ctx the parse tree
	 */
	exitMark_?: (ctx: Mark_Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.mark_text`.
	 * @param ctx the parse tree
	 */
	enterMark_text?: (ctx: Mark_textContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.mark_text`.
	 * @param ctx the parse tree
	 */
	exitMark_text?: (ctx: Mark_textContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.mark_color`.
	 * @param ctx the parse tree
	 */
	enterMark_color?: (ctx: Mark_colorContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.mark_color`.
	 * @param ctx the parse tree
	 */
	exitMark_color?: (ctx: Mark_colorContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.take_audio`.
	 * @param ctx the parse tree
	 */
	enterTake_audio?: (ctx: Take_audioContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.take_audio`.
	 * @param ctx the parse tree
	 */
	exitTake_audio?: (ctx: Take_audioContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.take_picture`.
	 * @param ctx the parse tree
	 */
	enterTake_picture?: (ctx: Take_pictureContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.take_picture`.
	 * @param ctx the parse tree
	 */
	exitTake_picture?: (ctx: Take_pictureContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.record_audio`.
	 * @param ctx the parse tree
	 */
	enterRecord_audio?: (ctx: Record_audioContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.record_audio`.
	 * @param ctx the parse tree
	 */
	exitRecord_audio?: (ctx: Record_audioContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.preparation_note`.
	 * @param ctx the parse tree
	 */
	enterPreparation_note?: (ctx: Preparation_noteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.preparation_note`.
	 * @param ctx the parse tree
	 */
	exitPreparation_note?: (ctx: Preparation_noteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.article`.
	 * @param ctx the parse tree
	 */
	enterArticle?: (ctx: ArticleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.article`.
	 * @param ctx the parse tree
	 */
	exitArticle?: (ctx: ArticleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.details`.
	 * @param ctx the parse tree
	 */
	enterDetails?: (ctx: DetailsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.details`.
	 * @param ctx the parse tree
	 */
	exitDetails?: (ctx: DetailsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.sample_solution`.
	 * @param ctx the parse tree
	 */
	enterSample_solution?: (ctx: Sample_solutionContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.sample_solution`.
	 * @param ctx the parse tree
	 */
	exitSample_solution?: (ctx: Sample_solutionContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.buttoncopytext`.
	 * @param ctx the parse tree
	 */
	enterButtoncopytext?: (ctx: ButtoncopytextContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.buttoncopytext`.
	 * @param ctx the parse tree
	 */
	exitButtoncopytext?: (ctx: ButtoncopytextContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.wbtcontinue`.
	 * @param ctx the parse tree
	 */
	enterWbtcontinue?: (ctx: WbtcontinueContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.wbtcontinue`.
	 * @param ctx the parse tree
	 */
	exitWbtcontinue?: (ctx: WbtcontinueContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.learningpathdetails`.
	 * @param ctx the parse tree
	 */
	enterLearningpathdetails?: (ctx: LearningpathdetailsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.learningpathdetails`.
	 * @param ctx the parse tree
	 */
	exitLearningpathdetails?: (ctx: LearningpathdetailsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.page`.
	 * @param ctx the parse tree
	 */
	enterPage?: (ctx: PageContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.page`.
	 * @param ctx the parse tree
	 */
	exitPage?: (ctx: PageContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.note`.
	 * @param ctx the parse tree
	 */
	enterNote?: (ctx: NoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.note`.
	 * @param ctx the parse tree
	 */
	exitNote?: (ctx: NoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.info`.
	 * @param ctx the parse tree
	 */
	enterInfo?: (ctx: InfoContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.info`.
	 * @param ctx the parse tree
	 */
	exitInfo?: (ctx: InfoContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.warning`.
	 * @param ctx the parse tree
	 */
	enterWarning?: (ctx: WarningContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.warning`.
	 * @param ctx the parse tree
	 */
	exitWarning?: (ctx: WarningContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.remark`.
	 * @param ctx the parse tree
	 */
	enterRemark?: (ctx: RemarkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.remark`.
	 * @param ctx the parse tree
	 */
	exitRemark?: (ctx: RemarkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.help`.
	 * @param ctx the parse tree
	 */
	enterHelp?: (ctx: HelpContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.help`.
	 * @param ctx the parse tree
	 */
	exitHelp?: (ctx: HelpContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.danger`.
	 * @param ctx the parse tree
	 */
	enterDanger?: (ctx: DangerContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.danger`.
	 * @param ctx the parse tree
	 */
	exitDanger?: (ctx: DangerContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bug`.
	 * @param ctx the parse tree
	 */
	enterBug?: (ctx: BugContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bug`.
	 * @param ctx the parse tree
	 */
	exitBug?: (ctx: BugContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.sidenote`.
	 * @param ctx the parse tree
	 */
	enterSidenote?: (ctx: SidenoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.sidenote`.
	 * @param ctx the parse tree
	 */
	exitSidenote?: (ctx: SidenoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.stickynote`.
	 * @param ctx the parse tree
	 */
	enterStickynote?: (ctx: StickynoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.stickynote`.
	 * @param ctx the parse tree
	 */
	exitStickynote?: (ctx: StickynoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.quote`.
	 * @param ctx the parse tree
	 */
	enterQuote?: (ctx: QuoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.quote`.
	 * @param ctx the parse tree
	 */
	exitQuote?: (ctx: QuoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.footnote`.
	 * @param ctx the parse tree
	 */
	enterFootnote?: (ctx: FootnoteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.footnote`.
	 * @param ctx the parse tree
	 */
	exitFootnote?: (ctx: FootnoteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.hintbit`.
	 * @param ctx the parse tree
	 */
	enterHintbit?: (ctx: HintbitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.hintbit`.
	 * @param ctx the parse tree
	 */
	exitHintbit?: (ctx: HintbitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.examplebit`.
	 * @param ctx the parse tree
	 */
	enterExamplebit?: (ctx: ExamplebitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.examplebit`.
	 * @param ctx the parse tree
	 */
	exitExamplebit?: (ctx: ExamplebitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.vendor_padlet_embed`.
	 * @param ctx the parse tree
	 */
	enterVendor_padlet_embed?: (ctx: Vendor_padlet_embedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.vendor_padlet_embed`.
	 * @param ctx the parse tree
	 */
	exitVendor_padlet_embed?: (ctx: Vendor_padlet_embedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.scorm`.
	 * @param ctx the parse tree
	 */
	enterScorm?: (ctx: ScormContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.scorm`.
	 * @param ctx the parse tree
	 */
	exitScorm?: (ctx: ScormContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_image`.
	 * @param ctx the parse tree
	 */
	enterBit_image?: (ctx: Bit_imageContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_image`.
	 * @param ctx the parse tree
	 */
	exitBit_image?: (ctx: Bit_imageContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_imageLink`.
	 * @param ctx the parse tree
	 */
	enterBit_imageLink?: (ctx: Bit_imageLinkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_imageLink`.
	 * @param ctx the parse tree
	 */
	exitBit_imageLink?: (ctx: Bit_imageLinkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_imageZoom`.
	 * @param ctx the parse tree
	 */
	enterBit_imageZoom?: (ctx: Bit_imageZoomContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_imageZoom`.
	 * @param ctx the parse tree
	 */
	exitBit_imageZoom?: (ctx: Bit_imageZoomContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_imagePrototype`.
	 * @param ctx the parse tree
	 */
	enterBit_imagePrototype?: (ctx: Bit_imagePrototypeContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_imagePrototype`.
	 * @param ctx the parse tree
	 */
	exitBit_imagePrototype?: (ctx: Bit_imagePrototypeContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_imageSuperWide`.
	 * @param ctx the parse tree
	 */
	enterBit_imageSuperWide?: (ctx: Bit_imageSuperWideContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_imageSuperWide`.
	 * @param ctx the parse tree
	 */
	exitBit_imageSuperWide?: (ctx: Bit_imageSuperWideContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_audio`.
	 * @param ctx the parse tree
	 */
	enterBit_audio?: (ctx: Bit_audioContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_audio`.
	 * @param ctx the parse tree
	 */
	exitBit_audio?: (ctx: Bit_audioContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_audioLink`.
	 * @param ctx the parse tree
	 */
	enterBit_audioLink?: (ctx: Bit_audioLinkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_audioLink`.
	 * @param ctx the parse tree
	 */
	exitBit_audioLink?: (ctx: Bit_audioLinkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_audioEmbed`.
	 * @param ctx the parse tree
	 */
	enterBit_audioEmbed?: (ctx: Bit_audioEmbedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_audioEmbed`.
	 * @param ctx the parse tree
	 */
	exitBit_audioEmbed?: (ctx: Bit_audioEmbedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_video`.
	 * @param ctx the parse tree
	 */
	enterBit_video?: (ctx: Bit_videoContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_video`.
	 * @param ctx the parse tree
	 */
	exitBit_video?: (ctx: Bit_videoContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_videoLink`.
	 * @param ctx the parse tree
	 */
	enterBit_videoLink?: (ctx: Bit_videoLinkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_videoLink`.
	 * @param ctx the parse tree
	 */
	exitBit_videoLink?: (ctx: Bit_videoLinkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_videoEmbed`.
	 * @param ctx the parse tree
	 */
	enterBit_videoEmbed?: (ctx: Bit_videoEmbedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_videoEmbed`.
	 * @param ctx the parse tree
	 */
	exitBit_videoEmbed?: (ctx: Bit_videoEmbedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_videoPortrait`.
	 * @param ctx the parse tree
	 */
	enterBit_videoPortrait?: (ctx: Bit_videoPortraitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_videoPortrait`.
	 * @param ctx the parse tree
	 */
	exitBit_videoPortrait?: (ctx: Bit_videoPortraitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_videoLandscape`.
	 * @param ctx the parse tree
	 */
	enterBit_videoLandscape?: (ctx: Bit_videoLandscapeContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_videoLandscape`.
	 * @param ctx the parse tree
	 */
	exitBit_videoLandscape?: (ctx: Bit_videoLandscapeContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_stillImageFilm`.
	 * @param ctx the parse tree
	 */
	enterBit_stillImageFilm?: (ctx: Bit_stillImageFilmContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_stillImageFilm`.
	 * @param ctx the parse tree
	 */
	exitBit_stillImageFilm?: (ctx: Bit_stillImageFilmContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_stillImageFilmLink`.
	 * @param ctx the parse tree
	 */
	enterBit_stillImageFilmLink?: (ctx: Bit_stillImageFilmLinkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_stillImageFilmLink`.
	 * @param ctx the parse tree
	 */
	exitBit_stillImageFilmLink?: (ctx: Bit_stillImageFilmLinkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_stillImageFilmEmbed`.
	 * @param ctx the parse tree
	 */
	enterBit_stillImageFilmEmbed?: (ctx: Bit_stillImageFilmEmbedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_stillImageFilmEmbed`.
	 * @param ctx the parse tree
	 */
	exitBit_stillImageFilmEmbed?: (ctx: Bit_stillImageFilmEmbedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_websiteLink`.
	 * @param ctx the parse tree
	 */
	enterBit_websiteLink?: (ctx: Bit_websiteLinkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_websiteLink`.
	 * @param ctx the parse tree
	 */
	exitBit_websiteLink?: (ctx: Bit_websiteLinkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_document`.
	 * @param ctx the parse tree
	 */
	enterBit_document?: (ctx: Bit_documentContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_document`.
	 * @param ctx the parse tree
	 */
	exitBit_document?: (ctx: Bit_documentContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_documentLink`.
	 * @param ctx the parse tree
	 */
	enterBit_documentLink?: (ctx: Bit_documentLinkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_documentLink`.
	 * @param ctx the parse tree
	 */
	exitBit_documentLink?: (ctx: Bit_documentLinkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_documentEmbed`.
	 * @param ctx the parse tree
	 */
	enterBit_documentEmbed?: (ctx: Bit_documentEmbedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_documentEmbed`.
	 * @param ctx the parse tree
	 */
	exitBit_documentEmbed?: (ctx: Bit_documentEmbedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_documentDownload`.
	 * @param ctx the parse tree
	 */
	enterBit_documentDownload?: (ctx: Bit_documentDownloadContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_documentDownload`.
	 * @param ctx the parse tree
	 */
	exitBit_documentDownload?: (ctx: Bit_documentDownloadContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_appLink`.
	 * @param ctx the parse tree
	 */
	enterBit_appLink?: (ctx: Bit_appLinkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_appLink`.
	 * @param ctx the parse tree
	 */
	exitBit_appLink?: (ctx: Bit_appLinkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bit_editorial`.
	 * @param ctx the parse tree
	 */
	enterBit_editorial?: (ctx: Bit_editorialContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bit_editorial`.
	 * @param ctx the parse tree
	 */
	exitBit_editorial?: (ctx: Bit_editorialContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_frontispiece`.
	 * @param ctx the parse tree
	 */
	enterBook_frontispiece?: (ctx: Book_frontispieceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_frontispiece`.
	 * @param ctx the parse tree
	 */
	exitBook_frontispiece?: (ctx: Book_frontispieceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_title`.
	 * @param ctx the parse tree
	 */
	enterBook_title?: (ctx: Book_titleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_title`.
	 * @param ctx the parse tree
	 */
	exitBook_title?: (ctx: Book_titleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_copyright`.
	 * @param ctx the parse tree
	 */
	enterBook_copyright?: (ctx: Book_copyrightContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_copyright`.
	 * @param ctx the parse tree
	 */
	exitBook_copyright?: (ctx: Book_copyrightContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_dedication`.
	 * @param ctx the parse tree
	 */
	enterBook_dedication?: (ctx: Book_dedicationContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_dedication`.
	 * @param ctx the parse tree
	 */
	exitBook_dedication?: (ctx: Book_dedicationContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_forword`.
	 * @param ctx the parse tree
	 */
	enterBook_forword?: (ctx: Book_forwordContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_forword`.
	 * @param ctx the parse tree
	 */
	exitBook_forword?: (ctx: Book_forwordContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_preface`.
	 * @param ctx the parse tree
	 */
	enterBook_preface?: (ctx: Book_prefaceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_preface`.
	 * @param ctx the parse tree
	 */
	exitBook_preface?: (ctx: Book_prefaceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_prologue`.
	 * @param ctx the parse tree
	 */
	enterBook_prologue?: (ctx: Book_prologueContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_prologue`.
	 * @param ctx the parse tree
	 */
	exitBook_prologue?: (ctx: Book_prologueContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_epilogue`.
	 * @param ctx the parse tree
	 */
	enterBook_epilogue?: (ctx: Book_epilogueContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_epilogue`.
	 * @param ctx the parse tree
	 */
	exitBook_epilogue?: (ctx: Book_epilogueContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_introduction`.
	 * @param ctx the parse tree
	 */
	enterBook_introduction?: (ctx: Book_introductionContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_introduction`.
	 * @param ctx the parse tree
	 */
	exitBook_introduction?: (ctx: Book_introductionContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_inciting_incident`.
	 * @param ctx the parse tree
	 */
	enterBook_inciting_incident?: (ctx: Book_inciting_incidentContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_inciting_incident`.
	 * @param ctx the parse tree
	 */
	exitBook_inciting_incident?: (ctx: Book_inciting_incidentContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_conclusion`.
	 * @param ctx the parse tree
	 */
	enterBook_conclusion?: (ctx: Book_conclusionContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_conclusion`.
	 * @param ctx the parse tree
	 */
	exitBook_conclusion?: (ctx: Book_conclusionContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_afterword`.
	 * @param ctx the parse tree
	 */
	enterBook_afterword?: (ctx: Book_afterwordContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_afterword`.
	 * @param ctx the parse tree
	 */
	exitBook_afterword?: (ctx: Book_afterwordContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_postscript`.
	 * @param ctx the parse tree
	 */
	enterBook_postscript?: (ctx: Book_postscriptContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_postscript`.
	 * @param ctx the parse tree
	 */
	exitBook_postscript?: (ctx: Book_postscriptContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_appendix`.
	 * @param ctx the parse tree
	 */
	enterBook_appendix?: (ctx: Book_appendixContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_appendix`.
	 * @param ctx the parse tree
	 */
	exitBook_appendix?: (ctx: Book_appendixContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_addendum`.
	 * @param ctx the parse tree
	 */
	enterBook_addendum?: (ctx: Book_addendumContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_addendum`.
	 * @param ctx the parse tree
	 */
	exitBook_addendum?: (ctx: Book_addendumContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_acknowledgments`.
	 * @param ctx the parse tree
	 */
	enterBook_acknowledgments?: (ctx: Book_acknowledgmentsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_acknowledgments`.
	 * @param ctx the parse tree
	 */
	exitBook_acknowledgments?: (ctx: Book_acknowledgmentsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_list_of_contributors`.
	 * @param ctx the parse tree
	 */
	enterBook_list_of_contributors?: (ctx: Book_list_of_contributorsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_list_of_contributors`.
	 * @param ctx the parse tree
	 */
	exitBook_list_of_contributors?: (ctx: Book_list_of_contributorsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_bibliography`.
	 * @param ctx the parse tree
	 */
	enterBook_bibliography?: (ctx: Book_bibliographyContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_bibliography`.
	 * @param ctx the parse tree
	 */
	exitBook_bibliography?: (ctx: Book_bibliographyContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_reference_list`.
	 * @param ctx the parse tree
	 */
	enterBook_reference_list?: (ctx: Book_reference_listContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_reference_list`.
	 * @param ctx the parse tree
	 */
	exitBook_reference_list?: (ctx: Book_reference_listContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_endnotes`.
	 * @param ctx the parse tree
	 */
	enterBook_endnotes?: (ctx: Book_endnotesContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_endnotes`.
	 * @param ctx the parse tree
	 */
	exitBook_endnotes?: (ctx: Book_endnotesContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_notes`.
	 * @param ctx the parse tree
	 */
	enterBook_notes?: (ctx: Book_notesContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_notes`.
	 * @param ctx the parse tree
	 */
	exitBook_notes?: (ctx: Book_notesContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_copyright_permissions`.
	 * @param ctx the parse tree
	 */
	enterBook_copyright_permissions?: (ctx: Book_copyright_permissionsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_copyright_permissions`.
	 * @param ctx the parse tree
	 */
	exitBook_copyright_permissions?: (ctx: Book_copyright_permissionsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_teaser`.
	 * @param ctx the parse tree
	 */
	enterBook_teaser?: (ctx: Book_teaserContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_teaser`.
	 * @param ctx the parse tree
	 */
	exitBook_teaser?: (ctx: Book_teaserContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_auther_bio`.
	 * @param ctx the parse tree
	 */
	enterBook_auther_bio?: (ctx: Book_auther_bioContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_auther_bio`.
	 * @param ctx the parse tree
	 */
	exitBook_auther_bio?: (ctx: Book_auther_bioContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_request_for_a_book_review`.
	 * @param ctx the parse tree
	 */
	enterBook_request_for_a_book_review?: (ctx: Book_request_for_a_book_reviewContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_request_for_a_book_review`.
	 * @param ctx the parse tree
	 */
	exitBook_request_for_a_book_review?: (ctx: Book_request_for_a_book_reviewContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_coming_soon`.
	 * @param ctx the parse tree
	 */
	enterBook_coming_soon?: (ctx: Book_coming_soonContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_coming_soon`.
	 * @param ctx the parse tree
	 */
	exitBook_coming_soon?: (ctx: Book_coming_soonContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_read_more`.
	 * @param ctx the parse tree
	 */
	enterBook_read_more?: (ctx: Book_read_moreContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_read_more`.
	 * @param ctx the parse tree
	 */
	exitBook_read_more?: (ctx: Book_read_moreContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_summary`.
	 * @param ctx the parse tree
	 */
	enterBook_summary?: (ctx: Book_summaryContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_summary`.
	 * @param ctx the parse tree
	 */
	exitBook_summary?: (ctx: Book_summaryContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_epigraph`.
	 * @param ctx the parse tree
	 */
	enterBook_epigraph?: (ctx: Book_epigraphContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_epigraph`.
	 * @param ctx the parse tree
	 */
	exitBook_epigraph?: (ctx: Book_epigraphContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.code`.
	 * @param ctx the parse tree
	 */
	enterCode?: (ctx: CodeContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.code`.
	 * @param ctx the parse tree
	 */
	exitCode?: (ctx: CodeContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.card1`.
	 * @param ctx the parse tree
	 */
	enterCard1?: (ctx: Card1Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.card1`.
	 * @param ctx the parse tree
	 */
	exitCard1?: (ctx: Card1Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.question1`.
	 * @param ctx the parse tree
	 */
	enterQuestion1?: (ctx: Question1Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.question1`.
	 * @param ctx the parse tree
	 */
	exitQuestion1?: (ctx: Question1Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.screenshot`.
	 * @param ctx the parse tree
	 */
	enterScreenshot?: (ctx: ScreenshotContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.screenshot`.
	 * @param ctx the parse tree
	 */
	exitScreenshot?: (ctx: ScreenshotContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.focus_image`.
	 * @param ctx the parse tree
	 */
	enterFocus_image?: (ctx: Focus_imageContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.focus_image`.
	 * @param ctx the parse tree
	 */
	exitFocus_image?: (ctx: Focus_imageContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.photo`.
	 * @param ctx the parse tree
	 */
	enterPhoto?: (ctx: PhotoContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.photo`.
	 * @param ctx the parse tree
	 */
	exitPhoto?: (ctx: PhotoContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.browser_image`.
	 * @param ctx the parse tree
	 */
	enterBrowser_image?: (ctx: Browser_imageContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.browser_image`.
	 * @param ctx the parse tree
	 */
	exitBrowser_image?: (ctx: Browser_imageContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.chapter_subject_matter`.
	 * @param ctx the parse tree
	 */
	enterChapter_subject_matter?: (ctx: Chapter_subject_matterContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.chapter_subject_matter`.
	 * @param ctx the parse tree
	 */
	exitChapter_subject_matter?: (ctx: Chapter_subject_matterContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.release_note`.
	 * @param ctx the parse tree
	 */
	enterRelease_note?: (ctx: Release_noteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.release_note`.
	 * @param ctx the parse tree
	 */
	exitRelease_note?: (ctx: Release_noteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.conclusion`.
	 * @param ctx the parse tree
	 */
	enterConclusion?: (ctx: ConclusionContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.conclusion`.
	 * @param ctx the parse tree
	 */
	exitConclusion?: (ctx: ConclusionContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.featured`.
	 * @param ctx the parse tree
	 */
	enterFeatured?: (ctx: FeaturedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.featured`.
	 * @param ctx the parse tree
	 */
	exitFeatured?: (ctx: FeaturedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.vendor_amcharts_5_chart`.
	 * @param ctx the parse tree
	 */
	enterVendor_amcharts_5_chart?: (ctx: Vendor_amcharts_5_chartContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.vendor_amcharts_5_chart`.
	 * @param ctx the parse tree
	 */
	exitVendor_amcharts_5_chart?: (ctx: Vendor_amcharts_5_chartContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.newspaper_article`.
	 * @param ctx the parse tree
	 */
	enterNewspaper_article?: (ctx: Newspaper_articleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.newspaper_article`.
	 * @param ctx the parse tree
	 */
	exitNewspaper_article?: (ctx: Newspaper_articleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.blog_article`.
	 * @param ctx the parse tree
	 */
	enterBlog_article?: (ctx: Blog_articleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.blog_article`.
	 * @param ctx the parse tree
	 */
	exitBlog_article?: (ctx: Blog_articleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_article`.
	 * @param ctx the parse tree
	 */
	enterBook_article?: (ctx: Book_articleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_article`.
	 * @param ctx the parse tree
	 */
	exitBook_article?: (ctx: Book_articleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.notebook_article`.
	 * @param ctx the parse tree
	 */
	enterNotebook_article?: (ctx: Notebook_articleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.notebook_article`.
	 * @param ctx the parse tree
	 */
	exitNotebook_article?: (ctx: Notebook_articleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.workbook_article`.
	 * @param ctx the parse tree
	 */
	enterWorkbook_article?: (ctx: Workbook_articleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.workbook_article`.
	 * @param ctx the parse tree
	 */
	exitWorkbook_article?: (ctx: Workbook_articleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.release_notes_summary`.
	 * @param ctx the parse tree
	 */
	enterRelease_notes_summary?: (ctx: Release_notes_summaryContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.release_notes_summary`.
	 * @param ctx the parse tree
	 */
	exitRelease_notes_summary?: (ctx: Release_notes_summaryContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_preparation`.
	 * @param ctx the parse tree
	 */
	enterCook_preparation?: (ctx: Cook_preparationContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_preparation`.
	 * @param ctx the parse tree
	 */
	exitCook_preparation?: (ctx: Cook_preparationContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_step`.
	 * @param ctx the parse tree
	 */
	enterCook_step?: (ctx: Cook_stepContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_step`.
	 * @param ctx the parse tree
	 */
	exitCook_step?: (ctx: Cook_stepContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_ingredients`.
	 * @param ctx the parse tree
	 */
	enterCook_ingredients?: (ctx: Cook_ingredientsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_ingredients`.
	 * @param ctx the parse tree
	 */
	exitCook_ingredients?: (ctx: Cook_ingredientsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_remark`.
	 * @param ctx the parse tree
	 */
	enterCook_remark?: (ctx: Cook_remarkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_remark`.
	 * @param ctx the parse tree
	 */
	exitCook_remark?: (ctx: Cook_remarkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_variation`.
	 * @param ctx the parse tree
	 */
	enterCook_variation?: (ctx: Cook_variationContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_variation`.
	 * @param ctx the parse tree
	 */
	exitCook_variation?: (ctx: Cook_variationContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_insert`.
	 * @param ctx the parse tree
	 */
	enterCook_insert?: (ctx: Cook_insertContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_insert`.
	 * @param ctx the parse tree
	 */
	exitCook_insert?: (ctx: Cook_insertContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_arrangement`.
	 * @param ctx the parse tree
	 */
	enterCook_arrangement?: (ctx: Cook_arrangementContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_arrangement`.
	 * @param ctx the parse tree
	 */
	exitCook_arrangement?: (ctx: Cook_arrangementContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_practice_advise`.
	 * @param ctx the parse tree
	 */
	enterCook_practice_advise?: (ctx: Cook_practice_adviseContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_practice_advise`.
	 * @param ctx the parse tree
	 */
	exitCook_practice_advise?: (ctx: Cook_practice_adviseContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_plate`.
	 * @param ctx the parse tree
	 */
	enterCook_plate?: (ctx: Cook_plateContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_plate`.
	 * @param ctx the parse tree
	 */
	exitCook_plate?: (ctx: Cook_plateContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_recommendation`.
	 * @param ctx the parse tree
	 */
	enterCook_recommendation?: (ctx: Cook_recommendationContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_recommendation`.
	 * @param ctx the parse tree
	 */
	exitCook_recommendation?: (ctx: Cook_recommendationContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_personal_recommendation`.
	 * @param ctx the parse tree
	 */
	enterCook_personal_recommendation?: (ctx: Cook_personal_recommendationContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_personal_recommendation`.
	 * @param ctx the parse tree
	 */
	exitCook_personal_recommendation?: (ctx: Cook_personal_recommendationContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_side_drink`.
	 * @param ctx the parse tree
	 */
	enterCook_side_drink?: (ctx: Cook_side_drinkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_side_drink`.
	 * @param ctx the parse tree
	 */
	exitCook_side_drink?: (ctx: Cook_side_drinkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_side_dish`.
	 * @param ctx the parse tree
	 */
	enterCook_side_dish?: (ctx: Cook_side_dishContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_side_dish`.
	 * @param ctx the parse tree
	 */
	exitCook_side_dish?: (ctx: Cook_side_dishContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.cook_timer`.
	 * @param ctx the parse tree
	 */
	enterCook_timer?: (ctx: Cook_timerContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.cook_timer`.
	 * @param ctx the parse tree
	 */
	exitCook_timer?: (ctx: Cook_timerContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_learning_outcomes`.
	 * @param ctx the parse tree
	 */
	enterLang_learning_outcomes?: (ctx: Lang_learning_outcomesContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_learning_outcomes`.
	 * @param ctx the parse tree
	 */
	exitLang_learning_outcomes?: (ctx: Lang_learning_outcomesContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_enabling_language_skills`.
	 * @param ctx the parse tree
	 */
	enterLang_enabling_language_skills?: (ctx: Lang_enabling_language_skillsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_enabling_language_skills`.
	 * @param ctx the parse tree
	 */
	exitLang_enabling_language_skills?: (ctx: Lang_enabling_language_skillsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_life_skills`.
	 * @param ctx the parse tree
	 */
	enterLang_life_skills?: (ctx: Lang_life_skillsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_life_skills`.
	 * @param ctx the parse tree
	 */
	exitLang_life_skills?: (ctx: Lang_life_skillsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_english_around_world`.
	 * @param ctx the parse tree
	 */
	enterLang_english_around_world?: (ctx: Lang_english_around_worldContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_english_around_world`.
	 * @param ctx the parse tree
	 */
	exitLang_english_around_world?: (ctx: Lang_english_around_worldContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_good_to_know`.
	 * @param ctx the parse tree
	 */
	enterLang_good_to_know?: (ctx: Lang_good_to_knowContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_good_to_know`.
	 * @param ctx the parse tree
	 */
	exitLang_good_to_know?: (ctx: Lang_good_to_knowContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_learning_strategy`.
	 * @param ctx the parse tree
	 */
	enterLang_learning_strategy?: (ctx: Lang_learning_strategyContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_learning_strategy`.
	 * @param ctx the parse tree
	 */
	exitLang_learning_strategy?: (ctx: Lang_learning_strategyContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_like_a_local`.
	 * @param ctx the parse tree
	 */
	enterLang_like_a_local?: (ctx: Lang_like_a_localContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_like_a_local`.
	 * @param ctx the parse tree
	 */
	exitLang_like_a_local?: (ctx: Lang_like_a_localContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_useful_phrases`.
	 * @param ctx the parse tree
	 */
	enterLang_useful_phrases?: (ctx: Lang_useful_phrasesContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_useful_phrases`.
	 * @param ctx the parse tree
	 */
	exitLang_useful_phrases?: (ctx: Lang_useful_phrasesContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_level_down`.
	 * @param ctx the parse tree
	 */
	enterLang_level_down?: (ctx: Lang_level_downContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_level_down`.
	 * @param ctx the parse tree
	 */
	exitLang_level_down?: (ctx: Lang_level_downContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_level_up`.
	 * @param ctx the parse tree
	 */
	enterLang_level_up?: (ctx: Lang_level_upContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_level_up`.
	 * @param ctx the parse tree
	 */
	exitLang_level_up?: (ctx: Lang_level_upContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_extra_activity`.
	 * @param ctx the parse tree
	 */
	enterLang_extra_activity?: (ctx: Lang_extra_activityContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_extra_activity`.
	 * @param ctx the parse tree
	 */
	exitLang_extra_activity?: (ctx: Lang_extra_activityContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_video_script`.
	 * @param ctx the parse tree
	 */
	enterLang_video_script?: (ctx: Lang_video_scriptContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_video_script`.
	 * @param ctx the parse tree
	 */
	exitLang_video_script?: (ctx: Lang_video_scriptContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_audio_script`.
	 * @param ctx the parse tree
	 */
	enterLang_audio_script?: (ctx: Lang_audio_scriptContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_audio_script`.
	 * @param ctx the parse tree
	 */
	exitLang_audio_script?: (ctx: Lang_audio_scriptContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_vocabulary`.
	 * @param ctx the parse tree
	 */
	enterLang_vocabulary?: (ctx: Lang_vocabularyContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_vocabulary`.
	 * @param ctx the parse tree
	 */
	exitLang_vocabulary?: (ctx: Lang_vocabularyContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_homework`.
	 * @param ctx the parse tree
	 */
	enterLang_homework?: (ctx: Lang_homeworkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_homework`.
	 * @param ctx the parse tree
	 */
	exitLang_homework?: (ctx: Lang_homeworkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lang_teacher_note`.
	 * @param ctx the parse tree
	 */
	enterLang_teacher_note?: (ctx: Lang_teacher_noteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lang_teacher_note`.
	 * @param ctx the parse tree
	 */
	exitLang_teacher_note?: (ctx: Lang_teacher_noteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.review_note`.
	 * @param ctx the parse tree
	 */
	enterReview_note?: (ctx: Review_noteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.review_note`.
	 * @param ctx the parse tree
	 */
	exitReview_note?: (ctx: Review_noteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.review_author_note`.
	 * @param ctx the parse tree
	 */
	enterReview_author_note?: (ctx: Review_author_noteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.review_author_note`.
	 * @param ctx the parse tree
	 */
	exitReview_author_note?: (ctx: Review_author_noteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.review_reviewer_note`.
	 * @param ctx the parse tree
	 */
	enterReview_reviewer_note?: (ctx: Review_reviewer_noteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.review_reviewer_note`.
	 * @param ctx the parse tree
	 */
	exitReview_reviewer_note?: (ctx: Review_reviewer_noteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.review_request_for_review_note`.
	 * @param ctx the parse tree
	 */
	enterReview_request_for_review_note?: (ctx: Review_request_for_review_noteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.review_request_for_review_note`.
	 * @param ctx the parse tree
	 */
	exitReview_request_for_review_note?: (ctx: Review_request_for_review_noteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.review_approved_note`.
	 * @param ctx the parse tree
	 */
	enterReview_approved_note?: (ctx: Review_approved_noteContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.review_approved_note`.
	 * @param ctx the parse tree
	 */
	exitReview_approved_note?: (ctx: Review_approved_noteContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.checklist`.
	 * @param ctx the parse tree
	 */
	enterChecklist?: (ctx: ChecklistContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.checklist`.
	 * @param ctx the parse tree
	 */
	exitChecklist?: (ctx: ChecklistContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.video_transcript`.
	 * @param ctx the parse tree
	 */
	enterVideo_transcript?: (ctx: Video_transcriptContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.video_transcript`.
	 * @param ctx the parse tree
	 */
	exitVideo_transcript?: (ctx: Video_transcriptContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.audio_transcript`.
	 * @param ctx the parse tree
	 */
	enterAudio_transcript?: (ctx: Audio_transcriptContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.audio_transcript`.
	 * @param ctx the parse tree
	 */
	exitAudio_transcript?: (ctx: Audio_transcriptContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_portrait`.
	 * @param ctx the parse tree
	 */
	enterImage_portrait?: (ctx: Image_portraitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_portrait`.
	 * @param ctx the parse tree
	 */
	exitImage_portrait?: (ctx: Image_portraitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_landscape`.
	 * @param ctx the parse tree
	 */
	enterImage_landscape?: (ctx: Image_landscapeContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_landscape`.
	 * @param ctx the parse tree
	 */
	exitImage_landscape?: (ctx: Image_landscapeContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_on_device`.
	 * @param ctx the parse tree
	 */
	enterImage_on_device?: (ctx: Image_on_deviceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_on_device`.
	 * @param ctx the parse tree
	 */
	exitImage_on_device?: (ctx: Image_on_deviceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bitmark_example`.
	 * @param ctx the parse tree
	 */
	enterBitmark_example?: (ctx: Bitmark_exampleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bitmark_example`.
	 * @param ctx the parse tree
	 */
	exitBitmark_example?: (ctx: Bitmark_exampleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.app_ai_prompt`.
	 * @param ctx the parse tree
	 */
	enterApp_ai_prompt?: (ctx: App_ai_promptContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.app_ai_prompt`.
	 * @param ctx the parse tree
	 */
	exitApp_ai_prompt?: (ctx: App_ai_promptContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_link`.
	 * @param ctx the parse tree
	 */
	enterBook_link?: (ctx: Book_linkContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_link`.
	 * @param ctx the parse tree
	 */
	exitBook_link?: (ctx: Book_linkContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_link_next`.
	 * @param ctx the parse tree
	 */
	enterBook_link_next?: (ctx: Book_link_nextContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_link_next`.
	 * @param ctx the parse tree
	 */
	exitBook_link_next?: (ctx: Book_link_nextContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.book_link_prev`.
	 * @param ctx the parse tree
	 */
	enterBook_link_prev?: (ctx: Book_link_prevContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.book_link_prev`.
	 * @param ctx the parse tree
	 */
	exitBook_link_prev?: (ctx: Book_link_prevContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.figure`.
	 * @param ctx the parse tree
	 */
	enterFigure?: (ctx: FigureContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.figure`.
	 * @param ctx the parse tree
	 */
	exitFigure?: (ctx: FigureContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.video_link_landscape`.
	 * @param ctx the parse tree
	 */
	enterVideo_link_landscape?: (ctx: Video_link_landscapeContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.video_link_landscape`.
	 * @param ctx the parse tree
	 */
	exitVideo_link_landscape?: (ctx: Video_link_landscapeContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.video_link_portrait`.
	 * @param ctx the parse tree
	 */
	enterVideo_link_portrait?: (ctx: Video_link_portraitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.video_link_portrait`.
	 * @param ctx the parse tree
	 */
	exitVideo_link_portrait?: (ctx: Video_link_portraitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bot_choice`.
	 * @param ctx the parse tree
	 */
	enterBot_choice?: (ctx: Bot_choiceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bot_choice`.
	 * @param ctx the parse tree
	 */
	exitBot_choice?: (ctx: Bot_choiceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.rating`.
	 * @param ctx the parse tree
	 */
	enterRating?: (ctx: RatingContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.rating`.
	 * @param ctx the parse tree
	 */
	exitRating?: (ctx: RatingContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	enterBullet_item?: (ctx: Bullet_itemContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bullet_item`.
	 * @param ctx the parse tree
	 */
	exitBullet_item?: (ctx: Bullet_itemContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.survey`.
	 * @param ctx the parse tree
	 */
	enterSurvey?: (ctx: SurveyContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.survey`.
	 * @param ctx the parse tree
	 */
	exitSurvey?: (ctx: SurveyContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.survey_1`.
	 * @param ctx the parse tree
	 */
	enterSurvey_1?: (ctx: Survey_1Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.survey_1`.
	 * @param ctx the parse tree
	 */
	exitSurvey_1?: (ctx: Survey_1Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.survey_anonymous`.
	 * @param ctx the parse tree
	 */
	enterSurvey_anonymous?: (ctx: Survey_anonymousContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.survey_anonymous`.
	 * @param ctx the parse tree
	 */
	exitSurvey_anonymous?: (ctx: Survey_anonymousContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.survey_anonymous_1`.
	 * @param ctx the parse tree
	 */
	enterSurvey_anonymous_1?: (ctx: Survey_anonymous_1Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.survey_anonymous_1`.
	 * @param ctx the parse tree
	 */
	exitSurvey_anonymous_1?: (ctx: Survey_anonymous_1Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.self_assessment`.
	 * @param ctx the parse tree
	 */
	enterSelf_assessment?: (ctx: Self_assessmentContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.self_assessment`.
	 * @param ctx the parse tree
	 */
	exitSelf_assessment?: (ctx: Self_assessmentContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.self_assess_s_and_w`.
	 * @param ctx the parse tree
	 */
	enterSelf_assess_s_and_w?: (ctx: Self_assess_s_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.self_assess_s_and_w`.
	 * @param ctx the parse tree
	 */
	exitSelf_assess_s_and_w?: (ctx: Self_assess_s_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.atpoint`.
	 * @param ctx the parse tree
	 */
	enterAtpoint?: (ctx: AtpointContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.atpoint`.
	 * @param ctx the parse tree
	 */
	exitAtpoint?: (ctx: AtpointContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.resource_format`.
	 * @param ctx the parse tree
	 */
	enterResource_format?: (ctx: Resource_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.resource_format`.
	 * @param ctx the parse tree
	 */
	exitResource_format?: (ctx: Resource_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	enterResource_format_extra?: (ctx: Resource_format_extraContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.resource_format_extra`.
	 * @param ctx the parse tree
	 */
	exitResource_format_extra?: (ctx: Resource_format_extraContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.format2`.
	 * @param ctx the parse tree
	 */
	enterFormat2?: (ctx: Format2Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.format2`.
	 * @param ctx the parse tree
	 */
	exitFormat2?: (ctx: Format2Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_format`.
	 * @param ctx the parse tree
	 */
	enterImage_format?: (ctx: Image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_format`.
	 * @param ctx the parse tree
	 */
	exitImage_format?: (ctx: Image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.video_format`.
	 * @param ctx the parse tree
	 */
	enterVideo_format?: (ctx: Video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.video_format`.
	 * @param ctx the parse tree
	 */
	exitVideo_format?: (ctx: Video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.article_format`.
	 * @param ctx the parse tree
	 */
	enterArticle_format?: (ctx: Article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.article_format`.
	 * @param ctx the parse tree
	 */
	exitArticle_format?: (ctx: Article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.document_format`.
	 * @param ctx the parse tree
	 */
	enterDocument_format?: (ctx: Document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.document_format`.
	 * @param ctx the parse tree
	 */
	exitDocument_format?: (ctx: Document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.app_format`.
	 * @param ctx the parse tree
	 */
	enterApp_format?: (ctx: App_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.app_format`.
	 * @param ctx the parse tree
	 */
	exitApp_format?: (ctx: App_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.website_format`.
	 * @param ctx the parse tree
	 */
	enterWebsite_format?: (ctx: Website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.website_format`.
	 * @param ctx the parse tree
	 */
	exitWebsite_format?: (ctx: Website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilm_format?: (ctx: Stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	enterOp_article_format?: (ctx: Op_article_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_article_format`.
	 * @param ctx the parse tree
	 */
	exitOp_article_format?: (ctx: Op_article_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	enterOp_document_format?: (ctx: Op_document_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_document_format`.
	 * @param ctx the parse tree
	 */
	exitOp_document_format?: (ctx: Op_document_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	enterOp_app_format?: (ctx: Op_app_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_app_format`.
	 * @param ctx the parse tree
	 */
	exitOp_app_format?: (ctx: Op_app_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	enterOp_website_format?: (ctx: Op_website_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_website_format`.
	 * @param ctx the parse tree
	 */
	exitOp_website_format?: (ctx: Op_website_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	enterOp_video_format?: (ctx: Op_video_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_video_format`.
	 * @param ctx the parse tree
	 */
	exitOp_video_format?: (ctx: Op_video_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	enterOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_stillimagefilm_format`.
	 * @param ctx the parse tree
	 */
	exitOp_stillimagefilm_format?: (ctx: Op_stillimagefilm_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.articlebit`.
	 * @param ctx the parse tree
	 */
	enterArticlebit?: (ctx: ArticlebitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.articlebit`.
	 * @param ctx the parse tree
	 */
	exitArticlebit?: (ctx: ArticlebitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.documentbit`.
	 * @param ctx the parse tree
	 */
	enterDocumentbit?: (ctx: DocumentbitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.documentbit`.
	 * @param ctx the parse tree
	 */
	exitDocumentbit?: (ctx: DocumentbitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.websitebit`.
	 * @param ctx the parse tree
	 */
	enterWebsitebit?: (ctx: WebsitebitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.websitebit`.
	 * @param ctx the parse tree
	 */
	exitWebsitebit?: (ctx: WebsitebitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.appbit`.
	 * @param ctx the parse tree
	 */
	enterAppbit?: (ctx: AppbitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.appbit`.
	 * @param ctx the parse tree
	 */
	exitAppbit?: (ctx: AppbitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	enterStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.stillimagefilmbit`.
	 * @param ctx the parse tree
	 */
	exitStillimagefilmbit?: (ctx: StillimagefilmbitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	enterStillimg_one?: (ctx: Stillimg_oneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.stillimg_one`.
	 * @param ctx the parse tree
	 */
	exitStillimg_one?: (ctx: Stillimg_oneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.videobit`.
	 * @param ctx the parse tree
	 */
	enterVideobit?: (ctx: VideobitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.videobit`.
	 * @param ctx the parse tree
	 */
	exitVideobit?: (ctx: VideobitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.video_one`.
	 * @param ctx the parse tree
	 */
	enterVideo_one?: (ctx: Video_oneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.video_one`.
	 * @param ctx the parse tree
	 */
	exitVideo_one?: (ctx: Video_oneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.imagebit`.
	 * @param ctx the parse tree
	 */
	enterImagebit?: (ctx: ImagebitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.imagebit`.
	 * @param ctx the parse tree
	 */
	exitImagebit?: (ctx: ImagebitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_one`.
	 * @param ctx the parse tree
	 */
	enterImage_one?: (ctx: Image_oneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_one`.
	 * @param ctx the parse tree
	 */
	exitImage_one?: (ctx: Image_oneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	enterOp_image_format?: (ctx: Op_image_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_image_format`.
	 * @param ctx the parse tree
	 */
	exitOp_image_format?: (ctx: Op_image_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_chained`.
	 * @param ctx the parse tree
	 */
	enterImage_chained?: (ctx: Image_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_chained`.
	 * @param ctx the parse tree
	 */
	exitImage_chained?: (ctx: Image_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	enterImage_chained4match?: (ctx: Image_chained4matchContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.image_chained4match`.
	 * @param ctx the parse tree
	 */
	exitImage_chained4match?: (ctx: Image_chained4matchContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.audiobit`.
	 * @param ctx the parse tree
	 */
	enterAudiobit?: (ctx: AudiobitContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.audiobit`.
	 * @param ctx the parse tree
	 */
	exitAudiobit?: (ctx: AudiobitContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.audio_one`.
	 * @param ctx the parse tree
	 */
	enterAudio_one?: (ctx: Audio_oneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.audio_one`.
	 * @param ctx the parse tree
	 */
	exitAudio_one?: (ctx: Audio_oneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.audio_format`.
	 * @param ctx the parse tree
	 */
	enterAudio_format?: (ctx: Audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.audio_format`.
	 * @param ctx the parse tree
	 */
	exitAudio_format?: (ctx: Audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	enterOp_audio_format?: (ctx: Op_audio_formatContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.op_audio_format`.
	 * @param ctx the parse tree
	 */
	exitOp_audio_format?: (ctx: Op_audio_formatContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	enterResource_chained?: (ctx: Resource_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.resource_chained`.
	 * @param ctx the parse tree
	 */
	exitResource_chained?: (ctx: Resource_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.telephone`.
	 * @param ctx the parse tree
	 */
	enterTelephone?: (ctx: TelephoneContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.telephone`.
	 * @param ctx the parse tree
	 */
	exitTelephone?: (ctx: TelephoneContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lead`.
	 * @param ctx the parse tree
	 */
	enterLead?: (ctx: LeadContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lead`.
	 * @param ctx the parse tree
	 */
	exitLead?: (ctx: LeadContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.angleref`.
	 * @param ctx the parse tree
	 */
	enterAngleref?: (ctx: AnglerefContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.angleref`.
	 * @param ctx the parse tree
	 */
	exitAngleref?: (ctx: AnglerefContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.example`.
	 * @param ctx the parse tree
	 */
	enterExample?: (ctx: ExampleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.example`.
	 * @param ctx the parse tree
	 */
	exitExample?: (ctx: ExampleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	enterBracketed_text?: (ctx: Bracketed_textContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bracketed_text`.
	 * @param ctx the parse tree
	 */
	exitBracketed_text?: (ctx: Bracketed_textContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.progress`.
	 * @param ctx the parse tree
	 */
	enterProgress?: (ctx: ProgressContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.progress`.
	 * @param ctx the parse tree
	 */
	exitProgress?: (ctx: ProgressContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.dateprop`.
	 * @param ctx the parse tree
	 */
	enterDateprop?: (ctx: DatepropContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.dateprop`.
	 * @param ctx the parse tree
	 */
	exitDateprop?: (ctx: DatepropContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	enterDateprop_chained?: (ctx: Dateprop_chainedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.dateprop_chained`.
	 * @param ctx the parse tree
	 */
	exitDateprop_chained?: (ctx: Dateprop_chainedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.bool_label`.
	 * @param ctx the parse tree
	 */
	enterBool_label?: (ctx: Bool_labelContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.bool_label`.
	 * @param ctx the parse tree
	 */
	exitBool_label?: (ctx: Bool_labelContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.progress_points`.
	 * @param ctx the parse tree
	 */
	enterProgress_points?: (ctx: Progress_pointsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.progress_points`.
	 * @param ctx the parse tree
	 */
	exitProgress_points?: (ctx: Progress_pointsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.istracked`.
	 * @param ctx the parse tree
	 */
	enterIstracked?: (ctx: IstrackedContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.istracked`.
	 * @param ctx the parse tree
	 */
	exitIstracked?: (ctx: IstrackedContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	enterIsinfoonly?: (ctx: IsinfoonlyContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.isinfoonly`.
	 * @param ctx the parse tree
	 */
	exitIsinfoonly?: (ctx: IsinfoonlyContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.atdef`.
	 * @param ctx the parse tree
	 */
	enterAtdef?: (ctx: AtdefContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.atdef`.
	 * @param ctx the parse tree
	 */
	exitAtdef?: (ctx: AtdefContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.atdef_`.
	 * @param ctx the parse tree
	 */
	enterAtdef_?: (ctx: Atdef_Context) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.atdef_`.
	 * @param ctx the parse tree
	 */
	exitAtdef_?: (ctx: Atdef_Context) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.dollarans`.
	 * @param ctx the parse tree
	 */
	enterDollarans?: (ctx: DollaransContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.dollarans`.
	 * @param ctx the parse tree
	 */
	exitDollarans?: (ctx: DollaransContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.lines`.
	 * @param ctx the parse tree
	 */
	enterLines?: (ctx: LinesContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.lines`.
	 * @param ctx the parse tree
	 */
	exitLines?: (ctx: LinesContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	enterS_and_w?: (ctx: S_and_wContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.s_and_w`.
	 * @param ctx the parse tree
	 */
	exitS_and_w?: (ctx: S_and_wContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.dclines`.
	 * @param ctx the parse tree
	 */
	enterDclines?: (ctx: DclinesContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.dclines`.
	 * @param ctx the parse tree
	 */
	exitDclines?: (ctx: DclinesContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.clnsp`.
	 * @param ctx the parse tree
	 */
	enterClnsp?: (ctx: ClnspContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.clnsp`.
	 * @param ctx the parse tree
	 */
	exitClnsp?: (ctx: ClnspContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.sspl`.
	 * @param ctx the parse tree
	 */
	enterSspl?: (ctx: SsplContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.sspl`.
	 * @param ctx the parse tree
	 */
	exitSspl?: (ctx: SsplContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.words`.
	 * @param ctx the parse tree
	 */
	enterWords?: (ctx: WordsContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.words`.
	 * @param ctx the parse tree
	 */
	exitWords?: (ctx: WordsContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.sp`.
	 * @param ctx the parse tree
	 */
	enterSp?: (ctx: SpContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.sp`.
	 * @param ctx the parse tree
	 */
	exitSp?: (ctx: SpContext) => void;

	/**
	 * Enter a parse tree produced by `bitmarkParser.sentence`.
	 * @param ctx the parse tree
	 */
	enterSentence?: (ctx: SentenceContext) => void;
	/**
	 * Exit a parse tree produced by `bitmarkParser.sentence`.
	 * @param ctx the parse tree
	 */
	exitSentence?: (ctx: SentenceContext) => void;
}

