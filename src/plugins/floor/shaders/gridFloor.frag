uniform float uGridThickness;
uniform vec3 uGridColor;
uniform float uCrossScale;
uniform float uCrossThickness;
uniform float uCross;
uniform vec3 uCrossColor;
uniform vec3 uFloorColor;

varying vec2 vUv;

float gridFloor(vec2 uv, vec2 lineWidth) {
    //💡 derivatives of original uv
    //   to create anti-aliasing line with smoothstep
    // how much a specific value is changing between one pixel and the next
    // width change depending on angle & distance from camera can be found with space partial derivatives
    // fwidth - approximation of derivatives
    //float lineAA = fwidth(uv.x);
    // vec2 uvDeriv = fwidth(uv);
    vec4 uvDDXY = vec4(dFdx(uv), dFdy(uv));
    vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));

    // 💡 Invert Line Trick
    // since 0.5 clamp was use, to handle line thickness > 0.5
    // draw black lines on white offset by half a grid width
    bool invertLine = lineWidth.x > 0.5;
    vec2 targetWidth = invertLine ? 1.0 - lineWidth : lineWidth;

    // 💡 Phone-wire AA
    // STEP 1: ensure line does not get smaller than one pixel
    // if so, we will clamp it to one pixel
    // vec2 drawWidth = max(uvDeriv, lineWidth);
    // clamp to 0.5 to ensure line fades to grey, not black
    vec2 drawWidth = clamp(targetWidth, uvDeriv, vec2(0.5));

    // 💡 1 pixel wide smoothstep can be too sharp causing aliasing
    // hence using 1.5 pixel wide smoothstep
    // AA - anti-aliasing
    vec2 lineAA = uvDeriv * 1.5;
    
    //💡 prepare uv for lines
    // 0-1(uv) 👉 0-2(multiply) 👉 -1-0-1(shift) 👉 1-0-1(absolute)
    // 👉 0-1-0(shift) make white at center(0,0) position
    // (fract) - make sawtooth wave
    //float lineUV = 1.0 - abs(fract(uv.x) * 2.0 - 1.0);
    vec2 gridUV = abs(fract(uv) * 2.0 - 1.0);
    gridUV = invertLine ? gridUV : 1.0 - gridUV;

    //💡 repeating lines
    // use the derivative to make the lines smooth
    //float line = smoothstep(lineWidth.x + lineAA, lineWidth.x - lineAA,lineUV);
    vec2 grid2 = smoothstep(drawWidth + lineAA, drawWidth - lineAA, gridUV);

    // 💡 Phone-wire AA
    // STEP 2: fades the line out as it gets thinner
    // how thick we want divided by how thick we’re drawing
    grid2 *= clamp(targetWidth / drawWidth, 0.0, 1.0);

    // 💡 Moire Suppresion
    // grid cells < a pixel(when derivative > 1.0), moire pattern can appear
    // note: after the 0.5 clamp, moire would be more pronounced, but in my case, i do not see any moire
    // fade to solid color when 0.5 > derivative > 1.0 
    // anti-aliased lines start to merge
    grid2 = mix(grid2, targetWidth, clamp(uvDeriv * 2.0 - 1.0, 0.0, 1.0));
    grid2 = invertLine ? 1.0 - grid2 : grid2;

    // overlap xy lines
    float grid = mix(grid2.x, 1.0, grid2.y);

    return grid;
}

float crossFloor(vec2 uv, float scale, float thickness, float crossIntensity) {
    vec2 lineWidth = vec2(thickness);

    //💡 derivatives of original uv
    //   to create anti-aliasing line with smoothstep
    // how much a specific value is changing between one pixel and the next
    // width change depending on angle & distance from camera can be found with space partial derivatives
    // fwidth - approximation of derivatives
    //float lineAA = fwidth(uv.x);
    // vec2 uvDeriv = fwidth(uv);
    vec4 uvDDXY = vec4(dFdx(uv), dFdy(uv));
    vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));

    // 💡 Invert Line Trick
    // since 0.5 clamp was use, to handle line thickness > 0.5
    // draw black lines on white offset by half a grid width
    bool invertLine = lineWidth.x > 0.5;
    // vec2 targetWidth = invertLine ? 1.0 - lineWidth : lineWidth;
    vec2 targetWidth = lineWidth;

    // 💡 Phone-wire AA
    // STEP 1: ensure line does not get smaller than one pixel
    // if so, we will clamp it to one pixel
    // vec2 drawWidth = max(uvDeriv, lineWidth);
    // clamp to 0.5 to ensure line fades to grey, not black
    vec2 drawWidth = clamp(targetWidth, uvDeriv, vec2(0.5));

    // 💡 1 pixel wide smoothstep can be too sharp causing aliasing
    // hence using 1.5 pixel wide smoothstep
    // AA - anti-aliasing
    vec2 lineAA = uvDeriv * 1.5;
    
    // Cross Intensity
    float cutOffX = abs(fract(uv.y) * 2.0 - 1.0) > crossIntensity ? 1.0 : 0.0;
    float cutOffY = abs(fract(uv.x) * 2.0 - 1.0) > crossIntensity ? 1.0 : 0.0;

    //💡 prepare uv for lines
    // 0-1(uv) 👉 0-2(multiply) 👉 -1-0-1(shift) 👉 1-0-1(absolute)
    // 👉 0-1-0(shift) make white at center(0,0) position
    // (fract) - make sawtooth wave
    //float lineUV = 1.0 - abs(fract(uv.x) * 2.0 - 1.0);
    // vec2 gridUV = abs(fract(uv) * 2.0 - 1.0);
    // UV
    float uvX = abs(fract(uv.x) * 2.0 - 1.0) + cutOffX;
    float uvY = abs(fract(uv.y) * 2.0 - 1.0) + cutOffY;
    vec2 gridUV = vec2(uvX, uvY);

    // gridUV = invertLine ? gridUV : 1.0 - gridUV;

    //💡 repeating lines
    // use the derivative to make the lines smooth
    //float line = smoothstep(lineWidth.x + lineAA, lineWidth.x - lineAA,lineUV);
    vec2 grid2 = smoothstep(drawWidth + lineAA, drawWidth - lineAA, gridUV);

    // 💡 Phone-wire AA
    // STEP 2: fades the line out as it gets thinner
    // how thick we want divided by how thick we’re drawing
    grid2 *= clamp(targetWidth / drawWidth, 0.0, 1.0);

    // 💡 Moire Suppresion
    // grid cells < a pixel(when derivative > 1.0), moire pattern can appear
    // note: after the 0.5 clamp, moire would be more pronounced, but in my case, i do not see any moire
    // fade to solid color when 0.5 > derivative > 1.0 
    // anti-aliased lines start to merge
    grid2 = mix(grid2, targetWidth, clamp(uvDeriv * 2.0 - 1.0, 0.0, 1.0));
    // grid2 = invertLine ? 1.0 - grid2 : grid2;

    // overlap xy lines
    float grid = mix(grid2.x, 1.0, grid2.y);

    return grid;
}

void main()
{
    vec2 lineWidth = vec2(uGridThickness);
    //💡 scaling uv to get multiple repeating lines
    vec2 uv = vUv * 20.0;

    // grid floor
    float grid = gridFloor(uv, lineWidth);
    // mix with floor color
    vec3 gridColor = mix(uFloorColor, uGridColor, vec3(grid));

    // cross grid
    float crossUv = crossFloor(uv, uCrossScale, uCrossThickness, uCross);
    // 💡 to add more grids on top, ensure the base is taken from previous gridColor
    vec3 gridColor2 = mix(gridColor, uCrossColor, vec3(crossUv));
    
    vec3 color =  gridColor2;

    gl_FragColor = vec4(color, 1.0);
}