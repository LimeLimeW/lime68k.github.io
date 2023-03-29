import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import base_path from "lume/plugins/base_path.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import imagick from "lume/plugins/imagick.ts";
const site = lume();

site.use(attributes());
site.use(base_path());
site.use(code_highlight());
site.use(date());
site.use(imagick());

export default site;
