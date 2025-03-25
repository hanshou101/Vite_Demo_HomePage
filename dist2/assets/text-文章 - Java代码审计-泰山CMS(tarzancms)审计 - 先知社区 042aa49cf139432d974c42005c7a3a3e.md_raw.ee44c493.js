const e=`# \u6587\u7AE0 - Java\u4EE3\u7801\u5BA1\u8BA1-\u6CF0\u5C71CMS(tarzancms)\u5BA1\u8BA1  - \u5148\u77E5\u793E\u533A

Created: March 23, 2025 4:41 PM
URL: https://xz.aliyun.com/news/16677?u_atoken=439208fe4cbc184595a96e365f4c2666&u_asig=0a472f4317427185182992186e013c
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

@CacheEvict(value = "theme", allEntries = true)

public ResponseVo upload(byte[] bytes) {

try {

String themeName = getZipThemeName(new ByteArrayInputStream(bytes));

if(StringUtil.isEmpty(themeName)){

return ResultUtil.error("\u4E3B\u9898\u6A21\u677F\u89E3\u6790\u5F02\u5E38");

}

String themePath = cmsProperties.getThemeDir() + File.separator+themeName;

File themeDir = new File(themePath);

if (!themeDir.exists() && !themeDir.mkdirs()) {

return ResultUtil.error("\u521B\u5EFA\u6587\u4EF6\u5939\u5931\u8D25");

}

if(!FileUtil.isEmpty(Paths.get(themePath))){

return ResultUtil.error("\u4E3B\u9898\u5DF2\u5B89\u88C5");

}

FileUtil.unzip(bytes, Paths.get(themePath));

Optional<File> themeRoot= Arrays.stream(themeDir.listFiles()).findFirst();

FileUtil.copyFolder(Paths.get(themeRoot.get().getPath()),Paths.get(themePath));

FileUtil.deleteFolder(Paths.get(themeRoot.get().getPath()));

Theme theme=new Theme();

theme.setName(themeName);

theme.setImg("theme"+ File.separator+themeName+File.separator+"screenshot.png");

theme.setStatus(0);

save(theme);

} catch (IOException e) {

return ResultUtil.error(e.getMessage());

}

return ResultUtil.success();

}`;export{e as _};
