﻿NDSummary.OnToolTipsLoaded("File:LessCodeEngine.Gizmos/Blocks/MySql/Helpers/NestedReadQuery.cs",{416:"<div class=\"NDToolTip TEnumeration LCSharp\"><div id=\"NDPrototype416\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal enum</span> RelationshipType</div></div></div>",417:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype417\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">internal</span></div><div class=\"CPName\"><span class=\"Qualifier\">LessCodeEngine.&#8203;Gizmos.&#8203;Blocks.&#8203;MySql.&#8203;Helpers.</span>&#8203;AssociationQueryInfo</div></div></div></div>",419:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype419\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal string</span> AssociationEntityName { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div></div>",420:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype420\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal string</span> RefEntityName { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div></div>",421:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype421\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal string</span> RefEntityIdFieldNameTableTo { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div></div>",422:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype422\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">internal string</span> AssociationFieldNameTableTo { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div></div></div>",423:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype423\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">internal</span></div><div class=\"CPName\"><span class=\"Qualifier\">LessCodeEngine.&#8203;Gizmos.&#8203;Blocks.&#8203;MySql.&#8203;Helpers.</span>&#8203;NestedReadQuery</div></div></div></div>",425:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype425\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> EvaluateAssociationInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">HashMap&nbsp;</td><td class=\"PName last\">associations,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">objectFieldName,</td></tr><tr><td class=\"PType first\">HashMap&nbsp;</td><td class=\"PName last\">fieldConfig,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">refEntityId,</td></tr><tr><td class=\"PType first\">Dictionary&lt;<span class=\"SHKeyword\">string</span>, <span class=\"SHKeyword\">object</span>&gt;&nbsp;</td><td class=\"PName last\">nestedQueriesForFields</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",426:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype426\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">internal object</span> Execute(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">AbstractBlock&nbsp;</td><td class=\"PName last\">block,</td></tr><tr><td class=\"PType first\">MySqlConnection&nbsp;</td><td class=\"PName last\">connection,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">entityId,</td></tr><tr><td class=\"PType first\">HashMap&nbsp;</td><td class=\"PName last\">userConfigurationForFieldSelect,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isArray,</td></tr><tr><td class=\"PType first\">HashMap&nbsp;</td><td class=\"PName last\">schemaEntities,</td></tr><tr><td class=\"PType first\">HashMap&nbsp;</td><td class=\"PName last\">whereFields,</td></tr><tr><td class=\"PType first\">AssociationQueryInfo&nbsp;</td><td class=\"PName last\">associationQueryInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",427:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype427\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static string</span> GenerateSelect(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">AbstractBlock&nbsp;</td><td class=\"PName last\">block,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">entityName,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isArray,</td></tr><tr><td class=\"PType first\">Dictionary&lt;<span class=\"SHKeyword\">string</span>,<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName last\">selectFieldDic,</td></tr><tr><td class=\"PType first\">Dictionary&lt;<span class=\"SHKeyword\">string</span>, <span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PName last\">otherFieldDic,</td></tr><tr><td class=\"PType first\">HashMap&nbsp;</td><td class=\"PName last\">whereFields,</td></tr><tr><td class=\"PType first\">AssociationQueryInfo&nbsp;</td><td class=\"PName last\">associationQueryInfo,</td></tr><tr><td class=\"PType first\">HashMap&nbsp;</td><td class=\"PName last\">filters</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>"});