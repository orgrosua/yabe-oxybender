<?php

/*
 * This file is part of the Yabe package.
 *
 * (c) Joshua Gugun Siagian <suabahasa@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

/**
 * Plugin constants.
 *
 * @since 1.0.0
 */
class OXYBENDER
{
    /**
     * @var string
     */
    public const FILE = __DIR__ . '/yabe-oxybender.php';

    /**
     * @var string
     */
    public const VERSION = '1.0.2';

    /**
     * @var int
     */
    public const VERSION_ID = 10002;

    /**
     * @var int
     */
    public const MAJOR_VERSION = 1;

    /**
     * @var int
     */
    public const MINOR_VERSION = 0;

    /**
     * @var int
     */
    public const RELEASE_VERSION = 2;

    /**
     * @var string
     */
    public const EXTRA_VERSION = '';

    /**
     * @var string
     */
    public const WP_OPTION = 'oxybender';

    /**
     * @var string
     */
    public const DB_TABLE_PREFIX = 'oxybender';

    /**
     * @var string
     */
    public const REST_NAMESPACE = 'yabe-oxybender/v1';
}
