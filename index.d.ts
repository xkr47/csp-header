declare module 'csp-header' {
  interface Dictionary<T> {
    [index: string]: T;
  }

  namespace csp {
    interface Policies {
      'base-uri'?: string[];
      'block-all-mixed-content'?: boolean;
      'child-src'?: string[];
      'connect-src'?: string[];
      'default-src'?: string[];
      'disown-opener'?: boolean;
      'font-src'?: string[];
      'form-action'?: string[];
      'frame-ancestors'?: string[];
      'frame-src'?: string[];
      'img-src'?: string[];
      'manifest-src'?: string[];
      'media-src'?: string[];
      'object-src'?: string[];
      'plugin-types'?: string[];
      'referrer'?: [ string ];
      'reflected-xss'?: boolean | string[];
      'sandbox'?: boolean | string[];
      'script-src'?: string[];
      'strict-dynamic'?: boolean | string[];
      'style-src'?: string[];
      'upgrade-insecure-requests'?: boolean;
      'worker-src'?: string[];
    }

    function nonce(nonceId: string): string;
    function resolvePreset(presetName: string): string;
    const NONE: string;
    const SELF: string;
    const INLINE: string;
    const EVAL: string;
  }

  interface Params {
    policies?: csp.Policies;
    extend?: csp.Policies;
    presets?: Array<csp.Policies | string> | Dictionary<csp.Policies | string>;
    'report-uri'?: string;
  }

  function csp(params: Params): string;

  export = csp;
}
